import Link from 'next/link'
import { Twitter, Youtube, Linkedin, Instagram } from 'lucide-react'

const SocialLinksSection = () => {
    return (
        <section className="container mx-auto px-4 py-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
            <div className="flex justify-center space-x-6">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="h-8 w-8"
                    >
                        {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                        <path
                            fill="currentColor"
                            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                        />
                    </svg>
                    <span className="sr-only">TikTok</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="w-8 h-8" />
                    <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Youtube className="w-8 h-8" />
                    <span className="sr-only">YouTube</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-8 h-8" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="w-8 h-8" />
                    <span className="sr-only">Instagram</span>
                </Link>
            </div>
        </section>
    )
}

export default SocialLinksSection