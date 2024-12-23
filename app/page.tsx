'use client'

import { Github, Linkedin, FileText, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import SmoothChangingSubtitle from './components/SmoothChangingSubtitle'

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
    <main className="min-h-screen w-full relative flex flex-col justify-center items-center overflow-hidden bg-[#020817]">
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/starfield-video-game-4k-wallpaper-uhdpaper.com-765@1@l.jpg-JIfz9jmHsZcihuAsT4xk4C7GDLZ2mm.jpeg"
          alt="Starfield background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-black opacity-20 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-mono text-white mb-2 text-shadow-lg">
          Caetano Monderen
        </h1>
        <SmoothChangingSubtitle />
        
        <div className="flex items-center justify-center space-x-8 mt-8">
          <SocialLink href="https://www.linkedin.com/in/caetano-monderen-442171340/" icon={<Linkedin className="w-6 h-6" />} />
          <SocialLink href="https://github.com/CaetanoMonderen" icon={<Github className="w-6 h-6" />} />
          <SocialLink 
            href="/CaetanoMonderen_Curriculum_Vitae.pdf" 
            icon={<FileText className={`w-6 h-6 ${isDownloading ? 'animate-pulse' : ''}`} />} 
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
      className={`text-white hover:text-gray-300 transition-colors duration-200 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} text-shadow`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-disabled={disabled}
    >
      {icon}
    </Link>
  )
}

