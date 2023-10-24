import express from "express"
import { rateLimit } from "express-rate-limit"


const app = express()



const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 200, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})

app.use("/auth", authLimiter)
app.use(limiter)
app.use("/room", ipLogger)




function ipLogger(req, res, next){
    console.log("ip log", req.ip)
    next()
}

function doorman(req, res, next){
    if(req.params.secret === "milfs"){
        next()
    } else {
        res.send({data: "new phone who dis"})
    }
    
}

import roomsRouter from "./routers/roomsRouter.js"
import authRouter from "./routers/authRouter.js"
import furnituresRouter from "./routers/furnituresRouter.js"
app.use(roomsRouter)
app.use(authRouter)
app.use(furnituresRouter)

app.get("/secretRoom/:secret", doorman, (req, res, next) => {
    res.send({data: "Welcome to the secret room"})
})


app.get("*", (req, res) => {
    res.send("<h1>404</h1>")
})

app.all("*", (req, res) => {
    res.status(404).send({data: `Unsupported path ${req.path}`})
})


app.listen(8080)