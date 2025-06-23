import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { name, email, trip } = data;

  if (!name || !email || !trip) {
    return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
  }

  const booking = await prisma.booking.create({
    data: { name, email, trip },
  });

  return NextResponse.json({ success: true, booking });
}