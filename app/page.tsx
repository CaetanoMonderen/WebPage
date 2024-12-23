'use client'

import { Github, Linkedin, FileText, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleCVDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsDownloading(true)
    try {
      const response = await fetch('/CaetanoMonderen_Curriculum_Vitae.pdf')
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.download = 'CaetanoMonderen_Curriculum_Vitae.pdf'
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
      } else {
        console.error('Failed to download CV')
      }
    } catch (error) {
      console.error('Error downloading CV:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <main className="min-h-screen w-full relative flex items-center justify-center overflow-hidden bg-[#020817]">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/starfield-video-game-4k-wallpaper-uhdpaper.com-765@1@l.jpg-JIfz9jmHsZcihuAsT4xk4C7GDLZ2mm.jpeg"
        alt="Starfield background"
        fill
        priority
        className="object-cover"
      />
      
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-mono text-white mb-2">
          Caetano Monderen
        </h1>
        <p className="text-xl md:text-2xl font-mono text-gray-300 mb-8">
          Bachelor Artificial Intelligence
        </p>
        
        <div className="flex items-center justify-center space-x-8">
          <SocialLink href="https://www.linkedin.com/in/caetano-monderen-442171340/" icon={<Linkedin className="w-6 h-6" />} />
          <SocialLink href="https://github.com/CaetanoMonderen" icon={<Github className="w-6 h-6" />} />
          <SocialLink 
            href="/CaetanoMonderen_Curriculum_Vitae.pdf" 
            icon={<FileText className="w-6 h-6" />} 
            onClick={handleCVDownload}
            disabled={isDownloading}
          />
          <SocialLink href="mailto:cm.monderen@gmail.com" icon={<Mail className="w-6 h-6" />} />
        </div>
      </div>
    </main>
  )
}

function SocialLink({ 
  href, 
  icon, 
  onClick, 
  disabled 
}: { 
  href: string; 
  icon: React.ReactNode; 
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  disabled?: boolean;
}) {
  return (
    <Link 
      href={href}
      className={`text-white/80 hover:text-white transition-colors duration-200 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-disabled={disabled}
    >
      {icon}
    </Link>
  )
}

