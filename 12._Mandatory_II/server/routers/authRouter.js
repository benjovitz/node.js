import { Router } from "express";
import { checkBody, checkUsernameAndPassword } from "../middleware/authMiddleware.js";

const router = Router()

router.post("/auth/login", checkBody, checkUsernameAndPassword,  (req, res) => {
    req.session.user = req.body.username
    console.log(req.session)
    res.send({data: "logged in"})
})

router.get("/auth/logout", (req, res) => {
    req.session.user = undefined
    console.log(req.session)
    res.sendStatus(200)
})

router.get("/auth/cookieTest", (req, res) => {
    console.log(req.session)
    res.sendStatus(200)
})
export default router