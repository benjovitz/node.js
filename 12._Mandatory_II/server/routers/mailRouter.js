import Router from "express"
import { sendContactMail, sendForgotMail } from "../util/mailUtil.js"
import * as emailValidator from "email-validator"
import db from "../databases/connection.js"

const router = Router()

function checkEmail(req, res, next){
    if(!req.body?.email){
        res.status(404).send({data: "Need email to send contact message"})
    } else if(!emailValidator.validate(req.body.email)){
        res.status(404).send({data: "please use valid email"})
    } else {
        next()
    }

}
router.post("/mail/forgot", checkEmail, async (req, res) => {
    try {
        const email = await db.all("SELECT email FROM users WHERE id = ?", [req.session.userId])
    } catch (error) {
        
    }
})

router.post("/mail/contact", checkEmail, (req, res) => {
    if(!req.body?.email){
        res.status(404).send({data: "Need email to send contact message"})
    } else  {
        sendContactMail(req.body.email)
        res.send({data: "mail sent"})
    }

})

export default router