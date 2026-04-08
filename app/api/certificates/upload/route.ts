import { put } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const title = formData.get('title') as string

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Generate unique filename
    const timestamp = Date.now()
    const filename = `certificates/${timestamp}-${file.name}`

    // Upload to Vercel Blob (public access so everyone can view)
    const blob = await put(filename, file, {
      access: 'public',
    })

    return NextResponse.json({ 
      url: blob.url,
      title: title || file.name,
      uploadedAt: new Date().toISOString()
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
