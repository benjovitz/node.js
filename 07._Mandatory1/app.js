import express from "express"
import path from "path"

export const app = express()
app.use(express.json())
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/homepage.html"))
})



app.listen(8080)