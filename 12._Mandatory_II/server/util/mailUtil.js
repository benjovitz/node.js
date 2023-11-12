
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'dayna.jacobi@ethereal.email',
        pass: 'b2C6uQ8PNRec3zWQQn'
    }
});

export async function sendContactMail() {
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

export async function sendForgotMail(mail) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Daniel Support" <${mail}>`, // sender address
      to: mail, // list of receivers
      subject: "Whoopsie-doodle! Your Password Needs a Buddy", // Subject line
      text: `Hey there,

      Looks like your password is feeling a bit lonely and wandered off somewhere. Silly password, right? No worries, we've got a plan to bring it back from its little escapade.
      
      Ready for the super tricky steps? Here we go:
      
          Clicky-click: Follow this "super secret" link http://localhost:8080/newPassword to start the quest. Yeah, we're making it sound like an epic adventure, but it's just finding a password. Exciting, huh?
            
          Follow the rainbow trail: No, seriously. There's no rainbow. But there's a trail of letters and numbers. Your password might be chilling there. Follow it like it's the most important thing you'll do today.
      
          Tadaaaa! You did it! Your password is back, and life is grand again. Until the next time it decides to play hide-and-seek.
      
      Remember, passwords need love too. Show it some attention, or who knows where it'll go next time?
      
      Best of luck,
      The Condescending Password Patrol 🙄`, 
      html: "<b>MAYO</b>", // html body
    });
}

sendForgotMail("mail@gmail.com")