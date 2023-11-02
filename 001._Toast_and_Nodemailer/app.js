import express from "express"

import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'dayna.jacobi@ethereal.email',
        pass: 'b2C6uQ8PNRec3zWQQn'
    }
});

  async function sendMail() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "dayna.jacobi@ethereal.email", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
}

const app = express()

app.get("/", (req, res) => {
    sendMail()
    res.send()
}) 

app.listen(8080)