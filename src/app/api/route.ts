// src/app/api/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Exporter la fonction GET si nécessaire (optionnel)
export async function GET() {
  return NextResponse.json({ message: 'GET request successful!' });
}

// La fonction POST pour envoyer des e-mails
export async function POST(req: Request) {
  const data: EmailRequest = await req.json(); // Lire le corps de la requête

  // Exemple d'envoi d'un e-mail
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Utiliser une variable d'environnement
        pass: process.env.EMAIL_PASS, // Utiliser une variable d'environnement
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
