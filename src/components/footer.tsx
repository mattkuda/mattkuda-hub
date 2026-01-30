import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t py-6 bg-secondary">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground">
                    © 2026 Matt Kuda. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    {/* Legal Links */}
                    <nav className="flex gap-4">
                        <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                            Terms
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                            Privacy
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                            Contact
                        </Link>
                    </nav>
                    {/* Social Media Icons */}
                    <div className="flex items-center gap-4 border-l border-border pl-6">
                        <Link href="https://twitter.com/mattkuda" target="_blank" rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors">
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href="https://instagram.com/mattkuda" target="_blank" rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors">
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link href="https://linkedin.com/in/mattkuda" target="_blank" rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href="https://tiktok.com/@mattkuda" target="_blank" rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="h-5 w-5"
                            >
                                {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                <path
                                    fill="currentColor"
                                    d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
} 