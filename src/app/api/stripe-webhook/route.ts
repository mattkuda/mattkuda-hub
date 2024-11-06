import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import mailgun from 'mailgun-js';
import { buffer } from 'node:stream/consumers';
import path from 'path';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-10-28.acacia',
});

const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY as string,
    domain: process.env.MAILGUN_DOMAIN as string,
});

// Get the absolute path to the PDF file
const pdfPath = path.join(process.cwd(), 'public', 'test.pdf');

export async function POST(req: NextRequest) {
    console.log('Stripe webhook POST request received');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body = await buffer(req.body as any);
    const sig = req.headers.get('stripe-signature');

    console.log('timestamp', new Date().toISOString());
    console.log('sig', sig);
    console.log('STRIPE_WEBHOOK_SECRET', process.env.STRIPE_WEBHOOK_SECRET);
    console.log('STRIPE_SECRET_KEY', process.env.STRIPE_SECRET_KEY);
    // console.log('body', body);
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
            console.log('Processing completed checkout:', session.id);

            // Get email from customer_details instead of customer_email
            const customerEmail = session.customer_details?.email;

            if (!customerEmail) {
                console.error('No customer email found in session');
                return NextResponse.json(
                    { error: 'No customer email found' },
                    { status: 400 }
                );
            }

            // Send the email with the PDF attachment
            const data = {
                from: 'Matt Kuda Fitness <programs@mattkuda.com>',
                to: customerEmail,
                subject: 'Your Purchased Fitness Program',
                text: 'Thank you for your purchase! Please find your program attached.',
                attachment: pdfPath,
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