import express from "express"
import path from "path"

export const app = express()
app.use(express.json())
app.use(express.static("public"))

/*---------------------------------------HTML-----------------------------------------------*/ 

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/homepage.html"))
})

app.get("/javascript", (req, res) => {
    res.sendFile(path.resolve("./public/javascript/topics.html"))
})

app.get("/javascript/basics", (req, res) => {
    res.sendFile(path.resolve("./public/javascript/topics/jsbasics.html"))
})

app.get("/javascript/declarations", (req, res) => {
    res.sendFile(path.resolve("./public/javascript/topics/declarations.html"))
})

app.get("/javascript/objects", (req, res) => {
    res.sendFile(path.resolve("./public/javascript/topics/objects.html"))
})

app.get("/javascript/arrays", (req, res) => {
    res.sendFile(path.resolve("./public/javascript/topics/arrays.html"))
})


/*---------------------------------------ROUTES-----------------------------------------------*/

app.listen(8080)