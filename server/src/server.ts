import express from 'express'
import { prisma } from './prisma'
import nodemailer from 'nodemailer'

const app = express()

app.use(express.json())

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "41a73599e290bf",
      pass: "6194dc1841737b"
    }
  });

app.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body;
    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    })

    transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Luis Felipi <330luisfelipe@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentario: ${comment}</p>`,
            `</div>`
        ].join('\n')
    })
    return res.status(201).json({data:feedback})
})

app.listen(3333, ()=>{
    console.log('HTTP server running')
})