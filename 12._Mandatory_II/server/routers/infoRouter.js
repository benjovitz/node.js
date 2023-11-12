import { Router } from "express";
import db from "../databases/connection.js"

import { checkCookie } from "../middleware/infoMiddleware.js";

const router = Router()

router.get("/api/info", checkCookie, async (req, res) => {
    const info = await db.all("SELECT * FROM user_infos WHERE user_id = ?", [req.session.userId])
    res.send({data: info})
})

router.post("/api/info", checkCookie, async (req, res) => {
    try {
        await db.run("INSERT INTO user_infos (info, user_id) VALUES (?, ?) ", [req.body.info, req.session.userId])
        res.status(200)
    } catch (error) {
        res.sendStatus(500)
    }
})

export default router