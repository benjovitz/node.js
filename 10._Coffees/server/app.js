import "dotenv/config"

import express from "express"
const app = express()

app.use(express.json())

import cors from "cors"
app.use(cors({
  credentials: true,
  origin: true
}))

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


import usersRouter from "./routers/usersRouter.js"
app.use(usersRouter)

import coffeesRouter from "./routers/coffeeRouter.js"
app.use(coffeesRouter)

import coffeeLoversRouter from "./routers/coffeeLoversRouter.js"
app.use(coffeeLoversRouter)

app.listen(8080)