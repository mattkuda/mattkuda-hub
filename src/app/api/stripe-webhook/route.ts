import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import mailgun from 'mailgun-js';
import { buffer } from 'node:stream/consumers';
import { Storage } from '@google-cloud/storage';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-10-28.acacia',
});

const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY as string,
    domain: process.env.MAILGUN_DOMAIN as string,
});

const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_KEYFILE_PATH,
});

const bucketName = process.env.GCLOUD_STORAGE_BUCKET as string;

export async function POST(req: NextRequest) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body = await buffer(req.body as any);
    const sig = req.headers.get('stripe-signature');

    if (!sig) {
        return NextResponse.json({ error: 'No signature' }, { status: 400 });
    }

    try {
        const event = stripe.webhooks.constructEvent(
            body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET as string
        );

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object as Stripe.Checkout.Session;

            const customerEmail = session.customer_details?.email;

            if (!customerEmail) {
                console.error('No customer email found in session');
                return NextResponse.json(
                    { error: 'No customer email found' },
                    { status: 400 }
                );
            }
            // TODO: Make this dynamic
            const fileName = 'test.pdf';
            const file = storage.bucket(bucketName).file(fileName);

            console.log('Attempting to download from GCS:', {
                bucket: bucketName,
                fileName: fileName
            });

            // Check if file exists
            const [exists] = await file.exists();
            console.log('File exists in GCS:', exists);

            if (!exists) {
                throw new Error('File does not exist in bucket');
            }

            // Get file metadata
            const [metadata] = await file.getMetadata();
            console.log('File metadata:', {
                size: metadata.size,
                contentType: metadata.contentType,
                updated: metadata.updated
            });

            // Download with specific options
            const [fileBuffer] = await file.download({
                validation: false
            });

            console.log('Downloaded file buffer size:', fileBuffer.length);
            console.log('First few bytes:', fileBuffer.slice(0, 20)); // Let's see what we actually got

            if (fileBuffer.length < 1000) { // PDFs are typically larger than 1KB
                throw new Error(`File seems too small: ${fileBuffer.length} bytes`);
            }

            const attachment = new mg.Attachment({
                data: fileBuffer,
                filename: fileName,
                contentType: 'application/pdf',
            });

            const data = {
                from: 'Matt Kuda Fitness <programs@mattkuda.com>',
                to: customerEmail,
                subject: 'Your Purchased Fitness Program TEST',
                text: 'Thank you for your purchase! Please find your program attached. TEST',
                attachment: attachment
            };

            try {
                await new Promise((resolve, reject) => {
                    mg.messages().send(data as mailgun.messages.SendData, (error) => {
                        if (error) reject(error);
                        else resolve(true);
                    });
                });

                return NextResponse.json({
                    message: 'Email sent successfully',
                    customerEmail,
                    sessionId: session.id
                });
            } catch (error) {
                console.error('Error sending email:', error);
                return NextResponse.json(
                    { error: 'Failed to send email' },
                    { status: 500 }
                );
            }
        }

        return NextResponse.json({ message: 'Event processed' });
    } catch (err) {
        console.error('Webhook error:', err);
        return NextResponse.json(
            { error: 'Webhook handler failed' },
            { status: 400 }
        );
    }
}