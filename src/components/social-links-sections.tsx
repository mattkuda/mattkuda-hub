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
                <Link href="https://tiktok.com/@mattkuda" target="_blank" rel="noopener noreferrer" className="relative z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="h-10 w-10 fill-current"
                    >
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                    </svg>
                </Link>
                <Link href="https://twitter.com/mattkuda" target="_blank" rel="noopener noreferrer" className="relative z-10">
                    <svg
                        className="h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 462.799"
                    >
                        <path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
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
            </div>
        </section>
    )
}

export default SocialLinksSection