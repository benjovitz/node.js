import { Router } from "express";
import { checkBody, checkUsernameAndPassword, checkUsername } from "../middleware/authMiddleware.js";
import bcrypt from "bcrypt"
import db from "../databases/connection.js"

const router = Router()


router.get("/auth/logout", (req, res) => {
    req.session.user = undefined
    console.log(req.session)
    res.sendStatus(200)
})

router.get("/auth/cookieTest", (req, res) => {
    res.send({data: req.session})
})

router.post("/auth/login", checkBody, checkUsernameAndPassword, async (req, res) => {
    console.log(req.session)
    res.send({data: "logged in"})
})

router.post("/auth/signup", checkBody, checkUsername, async (req, res) => {
    const newUser = {username: req.body.username, password: req.body.password, email: req.body.email}
    newUser.password = await bcrypt.hash(newUser.password, Number(process.env.SALT_ROUNDS))
    try {
        await db.run("INSERT INTO users(username, password, email) VALUES(?, ?, ?)", [newUser.username.toLowerCase(), newUser.password, newUser.email])
        res.send({data: `signed up with username ${req.body.username}`})
    } catch (error) {
        console.log(error)
        res.send(405)
    }
})

export default router