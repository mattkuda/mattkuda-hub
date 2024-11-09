import { Program } from "@/types/program";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export async function handleProgramPurchase(program: Program) {
    try {
        const stripe = await stripePromise;
        if (!stripe) {
            throw new Error('Stripe failed to initialize');
        }

        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                programTitle: program.title,
                price: program.price,
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const { url } = await response.json();
        window.location.href = url;

    } catch (error) {
        console.error('Error:', error);
        // You might want to handle errors differently or pass them up
        throw error;
    }
} 