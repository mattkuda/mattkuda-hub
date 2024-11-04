'use client'

import Header from '@/components/header'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft, Dumbbell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PurchaseDetails {
    programName: string
    price: number
    description: string
}

export default function SuccessPage() {
    const [purchaseDetails, setPurchaseDetails] = useState<PurchaseDetails | null>(null)

    useEffect(() => {
        // In a real application, you would fetch this data from your backend or local storage
        setPurchaseDetails({
            programName: "Ultimate Fitness Program",
            price: 49.99,
            description: "A comprehensive 12-week program designed to transform your body and mind."
        })
    }, [])

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 flex flex-col items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Thank you for your purchase!</h1>
                    <p className="text-xl text-gray-600">Welcome to a stronger, healthier you.</p>
                </motion.div>

                {purchaseDetails && (
                    <Card className="w-full max-w-2xl bg-white shadow-lg">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Purchase Confirmation</h2>
                            <p className="text-gray-600 mb-4">
                                You&apos;ve successfully purchased <span className="font-semibold">{purchaseDetails.programName}</span>.
                                Check your email for download instructions.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Purchase Summary</h3>
                                <p className="text-gray-600"><strong>Program:</strong> {purchaseDetails.programName}</p>
                                <p className="text-gray-600"><strong>Price:</strong> ${purchaseDetails.price.toFixed(2)}</p>
                                <p className="text-gray-600"><strong>Description:</strong> {purchaseDetails.description}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                                    <Link href="/">
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Return to Home
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                    <Link href="/programs">
                                        <Dumbbell className="w-4 h-4 mr-2" />
                                        Browse Other Programs
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-8 text-center"
                >
                    <p className="text-gray-600">
                        Need help? <Link href="/contact" className="text-blue-600 hover:underline">Contact our support team</Link>
                    </p>
                </motion.div>
            </div>
        </>
    )
}