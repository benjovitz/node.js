import { Router } from "express";

const router = Router()

router.get("/chair", (req, res) => {
    res.send({data: "PERJOHAN"})
})

router.get("/lamp", (req, res) => {
    res.send({data: "BARLAST"})
})

export default router