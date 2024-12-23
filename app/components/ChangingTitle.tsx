'use client'

import React, { useState, useEffect } from 'react'

const titles = [
  "Bachelor Artificial Intelligence",
  "Problem Solver",
  "Tech Enthusiast"
]

export default function ChangingTitle() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
        setFade(true)
      }, 500) // Wait for fade out before changing text
    }, 3000) // Change every 3 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <p 
      className={`text-xl md:text-2xl font-mono text-gray-300 mb-8 h-8 transition-opacity duration-500 ease-in-out ${
        fade ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {titles[titleIndex]}
    </p>
  )
}


