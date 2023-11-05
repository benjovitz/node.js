
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'dayna.jacobi@ethereal.email',
        pass: 'b2C6uQ8PNRec3zWQQn'
    }
});

export async function sendMail(mail) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Daniel Support" <daniel@support.com>', // sender address
      to: mail, // list of receivers
      subject: "Support", // Subject line
      text: `Hello,

      We're thrilled to hear about your ambitious 4-metric-ton mayonnaise order! That's a lot of creamy goodness, and we're here to support your condiment dreams.
      
      Whether you're preparing for the world's largest potato salad or simply want to ensure your sandwiches are never mayo-less, we're here to make sure your order goes smoothly. We'll keep an eye on the shipping, so your mayo arrives safe and sound.
      
      If you need any mayo-related advice or recipes (because who doesn't want to explore the endless culinary possibilities with that much mayo), feel free to ask. We're with you on this mayo adventure, and we're excited to see how it all turns out.
      
      Best regards and bon appétit!`, // plain text body
      html: "<b>MAYO</b>", // html body
    });
}