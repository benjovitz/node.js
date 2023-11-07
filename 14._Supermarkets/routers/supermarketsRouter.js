import { Router } from "express";
import db from "../databases/connection.js"

const router = Router()

router.get("/api/supermarkets", async (req, res) => {
    const supermarkets = await db.all("SELECT * FROM supermarkets")
    res.send({data: supermarkets})
})

router.post("/api/supermarkets", async (req, res) => {
    console.log(req.body)
    const result = await db.run(`INSERT INTO supermarkets(name, location) VALUES (?, ?) `,
                                                        [req.body.name, req.body.location])
    console.log(result)
    res.send({newId: result.lastID})
})

export default router