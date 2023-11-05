import Router from "express"
import { sendMail } from "../util/mailUtil.js"

const router = Router()

router.post("/mail/contact" ,(req, res) => {
    if(!req.body?.email){
        res.status(404).send({data: "Need email to send contact message"})
    } else {
        sendMail(req.body.email)
        res.send(200)
    }

})

export default router