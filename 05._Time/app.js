const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/home.html`)
})

app.listen(8080)