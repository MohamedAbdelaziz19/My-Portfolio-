import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Optional GET request
export async function GET() {
  return NextResponse.json({ message: 'GET request successful!' });
}

// POST request to send emails
export async function POST(req: Request) {
  const data: EmailRequest = await req.json(); // Read the request body

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Use an environment variable
        pass: process.env.EMAIL_PASS, // Use an environment variable
      },
    });

    const mailOptions = {
      from: data.email,
      to: process.env.EMAIL_USER,
      subject: data.subject,
      text: `${data.name}: ${data.message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
