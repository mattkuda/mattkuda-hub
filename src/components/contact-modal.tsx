'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail, Linkedin } from 'lucide-react'
import Link from "next/link"

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center">Let's Work Together 🚀</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                    <p className="text-center text-muted-foreground">
                        I'm always open to discussing new projects and opportunities. Choose your preferred way to connect:
                    </p>

                    <div className="flex flex-col gap-4">
                        <Link
                            href="https://twitter.com/mattkuda"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                className="w-full justify-between hover:bg-[#1DA1F2]/10"
                            >
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <polygon fill="#616161" points="41,6 9.929,42 6.215,42 37.287,6"></polygon><polygon fill="#fff" fill-rule="evenodd" points="31.143,41 7.82,7 16.777,7 40.1,41" clip-rule="evenodd"></polygon><path fill="#616161" d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"></path>
                                    </svg>
                                    <span>DM me on X (Twitter)</span>
                                </div>
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link
                            href="mailto:mattkuda@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                className="w-full justify-between hover:bg-blue-50"
                            >
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4" />
                                    <span>Email me directly: mattkuda@gmail.com</span>
                                </div>
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link
                            href="https://linkedin.com/in/mattkuda"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                className="w-full justify-between hover:bg-[#0077B5]/10"
                            >
                                <div className="flex items-center gap-2">
                                    <Linkedin className="h-4 w-4" />
                                    <span>Connect on LinkedIn</span>
                                </div>
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </Link>


                    </div>

                    <p className="text-center text-sm text-muted-foreground">
                        I typically respond within 24 hours during business days.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
} 