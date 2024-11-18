import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-10-28.acacia',
});

export async function POST(req: NextRequest) {
    const { programTitle, price } = await req.json();
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: programTitle,
                            images: ["https://pbs.twimg.com/profile_images/1794742629344649216/DyMPBWVF_400x400.jpg"],
                        },
                        unit_amount: price * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/success`,
            cancel_url: `${req.headers.get('origin')}`,
            billing_address_collection: 'required',
            allow_promotion_codes: true
        });

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create session' });
    }
}
