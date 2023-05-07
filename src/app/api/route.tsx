import { NextResponse } from 'next/dist/server/web/spec-extension/response.js'

export const runtime = 'edge'

export async function GET() {
  console.log(process.env.DB)

  const data = { message: 'Hello from the API!' }

  return NextResponse.json({ data })
}
