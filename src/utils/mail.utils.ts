// src/utils/mail.utils.ts
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT), // Assurez-vous que le port est un nombre
    secure: process.env.NODE_ENV !== 'development', // true
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
} as SMTPTransport.Options);

type SendEmailDto = {
    sender: Mail.Address,
    recipients: Mail.Address[], // Correction de l'orthographe de "recipients"
    subject: string;
    message: string;
};

export const sendEmail = async (dto: SendEmailDto) => {
    const { sender, recipients, subject, message } = dto;
    return await transport.sendMail({ // Utilisez sendMail au lieu de sendEmail
        from: sender,
        to: recipients,
        subject,
        html: message,
        text: message,
    });
};
