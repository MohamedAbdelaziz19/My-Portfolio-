import { sendEmail } from './mail.utils';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { text } from 'stream/consumers';

const trensport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.NODE_ENV !== 'development',//true
    auth: {
         user:process.env.MAIL_USER,
         pass:process.env.MAIL_PASSWORD

},
}as SMTPTransport.Options)
type SendEmailDto= {
    sender: Mail.Address,
    receipients:Mail.Address[],
    subject:string;
    message:string;
}
export const sendEmail = async(dto:SendEmailDto)=>{
    const {sender, reciepients, subject,message}= dto;
    return await transport.sendEmail({
        from:sender,
        to:reciepients,
        subject,
        html:message,
        text:message,
    })
}