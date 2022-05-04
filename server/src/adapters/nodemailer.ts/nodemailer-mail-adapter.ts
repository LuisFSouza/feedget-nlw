import { MailAdapter, SendMailData } from "../mail-adaper";
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "41a73599e290bf",
      pass: "6194dc1841737b"
    }
  });

export class NodeMailerAdapter implements MailAdapter {
    async sendMail ({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Luis Felipi <330luisfelipe@gmail.com>',
            subject,
            html: body
           
        })
        
    }
}