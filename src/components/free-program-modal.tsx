'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CheckCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import { Program } from "@/types/program";

interface FreeProgramModalProps {
    program: Program;
    isOpen: boolean;
    onClose: () => void;
}

export function FreeProgramModal({ program, isOpen, onClose }: FreeProgramModalProps) {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const subscribeUrl = `https://mattkuda.substack.com/subscribe?email=${encodeURIComponent(email)}`;
            window.open(subscribeUrl, '_blank', 'noopener,noreferrer');
            setIsSuccess(true);
        } catch (error) {
            console.error('Submission failed:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                {!isSuccess ? (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-2xl text-center">Get Your Free Program</DialogTitle>
                            <DialogDescription className="text-base pt-2">
                                Sign up for my newsletter and receive {program.title} instantly in your welcome email!
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                            <Input
                                type="email"
                                placeholder="Enter your email to subscribe"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="h-12 text-lg"
                                disabled={isSubmitting}
                            />
                            <Button
                                type="submit"
                                className="w-full h-12 text-lg bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] text-white"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Processing..." : "Get My Free Program"}
                            </Button>
                        </form>
                    </>
                ) : (
                    <div className="flex flex-col items-center py-6">
                        <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                        <h2 className="text-xl font-bold text-center mb-2">
                            Check your inbox!
                        </h2>
                        <p className="text-muted-foreground text-center mb-6">
                            Your free program will arrive shortly after confirming your subscription.
                        </p>
                        <Button
                            onClick={onClose}
                            className="bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] text-white"
                        >
                            Close
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
} 