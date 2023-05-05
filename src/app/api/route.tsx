import { NextResponse } from 'next/server.js'

export const runtime = 'edge'

export async function GET() {
  const data = { message: 'Hello from the API!' }

  return NextResponse.json({ data })
}
