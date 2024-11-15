'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function NewsletterSection() {
    const [email, setEmail] = useState('');


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const subscribeUrl = `https://mattkuda.substack.com/subscribe?email=${encodeURIComponent(email)}`;

        window.open(subscribeUrl, '_blank', 'noopener,noreferrer');

        setEmail('');
    };

    return (
        <section className="py-12 md:py-24">
            <div className="container">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
                    <p className="mb-8 text-zinc-600">
                        Sign up for my newsletter to receive tech news, fitness tips, and the content I find most interesting each month.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <Input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="h-12"
                            />
                        </div>
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full"
                            disabled={!email}
                        >
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}