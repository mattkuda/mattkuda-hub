'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedEmojiSequenceProps {
    interval?: number;
}

const emojis = ["👨🏻‍💻", "🌱", "💪", "🧠", "💻", "🏋️‍♂️", "🥭"];

export function AnimatedEmojiSequence({
    interval = 1500
}: AnimatedEmojiSequenceProps) {
    const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentEmojiIndex((prev) => (prev + 1) % emojis.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [emojis.length, interval]);

    return (
        <div className="relative w-12 h-12 overflow-hidden">
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={currentEmojiIndex}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center text-3xl"
                >
                    {emojis[currentEmojiIndex]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
} 