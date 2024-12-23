import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Caetano Monderen - Personal Website',
  description: 'Personal website of Caetano Monderen, Bachelor in Artificial Intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

