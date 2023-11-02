import express from "express"
const app = express()
app.use(express.json())

import "dotenv/config"

import helmet from "helmet"
app.use(helmet())

import session from "express-session"
app.set('trust proxy', 1)
app.use(session({
  secret: process.env.SESSION_SECRET, // require("crypto").randomBytes(42).toString("hex")
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } //https if true, http for false
}))

import cors from "cors"
app.use(cors({
  credentials: true,
  origin: true
}))

import authRouter from "./routers/authRouter.js"
app.use(authRouter)

import infoRouter from "./routers/infoRouter.js"
app.use(infoRouter)

app.get("/", (req, res) => {
    console.log(req.session)
    res.send()
})

app.listen(8080)