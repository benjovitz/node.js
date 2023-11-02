import { Router } from "express";
import { users } from "../util/userMock.js";

import { checkCookie } from "../middleware/infoMiddleware.js";

const router = Router()

router.get("/info", checkCookie, (req, res) => {
    const userToFind = users.find(user => user.username === req.session.user)
    res.send({data: userToFind.info})
})

export default router