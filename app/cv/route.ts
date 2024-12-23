import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'cv.pdf')
  
  try {
    const fileBuffer = await fs.readFile(filePath)
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': 'attachment; filename="Caetano_Monderen_CV.pdf"',
        'Content-Type': 'application/pdf',
      },
    })
  } catch (error) {
    console.error('Error serving CV:', error)
    return new NextResponse('CV not found', { status: 404 })
  }
}
https://github.com/CaetanoMonderen/WebPage