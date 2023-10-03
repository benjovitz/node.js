import express from "express"

const app = express()
app.use(express.static("../frontend/build"))

app.listen(8080)