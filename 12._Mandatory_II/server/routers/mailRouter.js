import Router from "express"
import { sendMail } from "../util/mailUtil.js"
import * as emailValidator from "email-validator"

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


router.post("/mail/contact", checkEmail, (req, res) => {
    if(!req.body?.email){
        res.status(404).send({data: "Need email to send contact message"})
    } else  {
        sendMail(req.body.email)
        res.send({data: "mail sent"})
    }

})

export default router