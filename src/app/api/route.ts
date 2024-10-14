// Example route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Define the request body type
interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data: EmailRequest = req.body; // Explicitly typing the body

    // Example of sending an email
    try {
      // Your nodemailer setup and email sending logic here
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // use environment variable
          pass: process.env.EMAIL_PASS, // use environment variable
        },
      });

      const mailOptions = {
        from: data.email,
        to: process.env.EMAIL_USER,
        subject: data.subject,
        text: `${data.name}: ${data.message}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (err: unknown) {
      console.error(err);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
