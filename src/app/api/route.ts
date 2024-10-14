import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Your logic for the GET request
  return NextResponse.json({ message: 'Data Posted' });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: 'Data received', data: body });
}
