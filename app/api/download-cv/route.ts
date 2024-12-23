import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'CaetanoMonderen_Curriculum_Vitae.pdf')
  
  try {
    const fileBuffer = await fs.readFile(filePath)
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': 'attachment; filename="CaetanoMonderen_Curriculum_Vitae.pdf"',
        'Content-Type': 'application/pdf',
      },
    })
  } catch (error) {
    console.error('Error serving CV:', error)
    return new NextResponse('CV not found', { status: 404 })
  }
}