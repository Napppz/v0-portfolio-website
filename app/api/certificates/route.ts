import { list, del } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const { blobs } = await list({
      prefix: 'certificates/',
    })

    const certificates = blobs.map((blob) => ({
      id: blob.pathname,
      url: blob.url,
      title: blob.pathname.split('/').pop()?.replace(/^\d+-/, '') || 'Certificate',
      uploadedAt: blob.uploadedAt,
    }))

    return NextResponse.json({ certificates })
  } catch (error) {
    console.error('Error listing certificates:', error)
    return NextResponse.json({ error: 'Failed to list certificates' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: 'No URL provided' }, { status: 400 })
    }

    await del(url)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 })
  }
}
