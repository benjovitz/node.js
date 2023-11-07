import express from "express"

const app = express()

app.use(express.json())


const PORT = process.env.PORT || 8080

import supermarketsRouter from "./routers/supermarketsRouter.js"
app.use(supermarketsRouter)


app.listen(PORT)