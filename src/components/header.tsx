import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
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
                        <Link href="/programs" className="text-sm font-medium">Programs</Link>
                        <Link href="/projects" className="text-sm font-medium">Projects</Link>
                        <Link href="/aboutme" className="text-sm font-medium">About Me</Link>
                        <Link href="/content" className="text-sm font-medium">Content</Link>
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
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header >
    );
};

export default Header; 