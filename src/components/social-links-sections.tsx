import Link from 'next/link'
import { Youtube, Linkedin, Instagram } from 'lucide-react'

const SocialLinksSection = () => {
    return (
        <section className="container mx-auto px-4 py-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Let&apos;s Connect</h3>
            <p className="text-muted-foreground mb-8">Follow me on my socials to stay updated with the latest content and news.</p>
            <div className="relative inline-flex justify-center space-x-6 p-1">
                {/* Gradient overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570]"
                    style={{ WebkitMaskImage: 'url("#social-icons-mask")', maskImage: 'url("#social-icons-mask")' }}
                />
                {/* SVG mask */}
                <svg width="0" height="0" className="hidden">
                    <defs>
                        <mask id="social-icons-mask">
                            <rect width="100%" height="100%" fill="white" />
                        </mask>
                    </defs>
                </svg>
                {/* Icons */}
                <Link href="https://twitter.com/mattkuda" target="_blank" rel="noopener noreferrer" className="relative z-10">
                    <svg
                        className="h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 462.799"
                    >
                        <path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
                    </svg>
                </Link>
                <Link href="https://tiktok.com/@mattkuda" target="_blank" rel="noopener noreferrer" className="relative z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="h-10 w-10 fill-current"
                    >
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                    </svg>
                </Link>
                <Link href="https://youtube.com/@matt_kuda" target="_blank" rel="noopener noreferrer" className="relative z-10">
                    <Youtube className="w-10 h-10" />
                </Link>
                <Link href="https://linkedin.com/in/mattkuda" target="_blank" rel="noopener noreferrer" className="relative z-10">
                    <Linkedin className="w-10 h-10" />
                </Link>
                <Link href="https://instagram.com/mattkuda" target="_blank" rel="noopener noreferrer" className="relative z-10">
                    <Instagram className="w-10 h-10" />
                </Link>
                <Link
                    href="https://open.spotify.com/artist/3Yju8uuBcK8PfpmVClUAdY?si=75081e9708ba4547"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 hover:text-[#1DB954] transition-colors duration-200"
                >
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.542-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.281 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                </Link>
            </div>
        </section >
    )
}

export default SocialLinksSection