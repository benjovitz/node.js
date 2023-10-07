import express from "express"

import mountainController from "./controllers/mountainController.js"
import simpleApiController from "./controllers/simpleController.js"
import htmlController from "./controllers/htmlController.js"

const app = express()

app.use(express.json())
app.use(express.static("public"))
app.use("/api", mountainController)
app.use("/api", simpleApiController)
app.use("/", htmlController)

app.listen(process.env.PORT)