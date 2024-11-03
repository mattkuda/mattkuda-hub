import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-10-28.acacia',
});

export async function POST(req: NextRequest) {
    const { programId, price } = await req.json();
    console.log(programId, price);
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: programId,
                        },
                        unit_amount: price * 100, // Stripe expects amounts in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/success`,
            cancel_url: `${req.headers.get('origin')}/cancel`,
        });

        return NextResponse.json({ url: session.url, sessionId: session.id });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create session' });
    }
}
