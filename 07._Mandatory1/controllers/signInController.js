import { Router } from "express";
import { signInCheck, generateToken } from "../middleware/signIn.js";
import { privatePagePage } from "../util/preparePages.js";
const router = Router()


router.post("/getToken", (req, res) => {
    const token = generateToken(req.body)
    res.send({data: token})
})

router.get("/membersPage/:token", (req, res) => {
    if(signInCheck(req.params.token)){
        res.send(privatePagePage)
    } else {
        res.status(403).send({data: "Wrong password or username"})
    }
})

export default router