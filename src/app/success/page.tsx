'use client'

import Link from 'next/link'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SuccessPage() {
    return (
        <>
            <main className="min-h-screen bg-zinc-100 p-4">
                <div className="container mx-auto max-w-3xl py-12">
                    <Card className="overflow-hidden">
                        <CardContent className="p-8 flex flex-col items-center">
                            <CheckCircle className="w-16 h-16 text-green-600 mb-6" />
                            <h1 className="text-3xl font-bold text-zinc-900 mb-2 text-center">
                                Thank you for your purchase!
                            </h1>
                            <p className="text-zinc-600 mb-8 text-center">
                                Check your email for your program details.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Button asChild>
                                    <Link href="/">
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Return Home
                                    </Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href="/programs">
                                        View More Programs
                                    </Link>
                                </Button>
                            </div>

                            <p className="mt-8 text-sm text-zinc-500 text-center">
                                Need help? <Link href="/contact" className="text-zinc-900 underline underline-offset-4">Contact support</Link>
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
    )
}