'use client'
import { Mail, Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from 'react';
import { ContactModal } from './contact-modal';
import { ThemeToggle } from './theme-toggle';

const Header = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container  mx-auto max-w-7xl flex h-16 items-center justify-between">
                {/* Left side - Title */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold">MATT KUDA</span>
                </Link>

                {/* Right side - Navigation */}
                <div className="flex items-center">
                    {/* Desktop Navigation */}
                    <nav className="hidden items-center space-x-6 md:flex">
                        <Link href="/portfolio" className="text-md font-medium">Portfolio</Link>
                        <Link href="/programs" className="text-md font-medium">Programs</Link>
                        <Link href="/aboutme" className="text-md font-medium">About Me</Link>
                        <Link href="/content" className="text-md font-medium">Content</Link>
                        <Button onClick={() => setIsContactModalOpen(true)} className="text-sm font-medium">
                            Contact
                            <Mail className="h-4 w-4" />
                        </Button>
                        <ThemeToggle />
                    </nav>
                    {/* Mobile Menu Button */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="ml-4 md:hidden" aria-label="Open menu">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col gap-4">
                                <Link href="/programs" className="text-lg font-semibold">Programs</Link>
                                <Link href="/portfolio" className="text-lg font-semibold">Projects</Link>
                                <Link href="/aboutme" className="text-lg font-semibold">About Me</Link>
                                <Link href="/content" className="text-lg font-semibold">Content</Link>
                                <ThemeToggle />
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </header >
    );
};

export default Header; 
