'use client'

import React, { useState, useEffect } from 'react'

const subtitles = [
  "Bachelor Artificial Intelligence",
  "Problem Solver",
  "Tech Enthusiast"
]

export default function SmoothChangingSubtitle() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % subtitles.length)
        setFade(true)
      }, 500) // Wait for fade out before changing text
    }, 3000) // Change every 3 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <p 
      className={`text-xl md:text-2xl font-mono text-white mb-4 transition-opacity duration-500 ease-in-out ${
        fade ? 'opacity-100' : 'opacity-0'
      } text-shadow`}
    >
      {subtitles[index]}
    </p>
  )
}
