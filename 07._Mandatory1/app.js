import express from "express"
import path from "path"

import { homepagePage, javascriptTopicsPage, jsBasicsPage, declarationsPage, objectsPage, arraysPage, functionsPage, firstExpressServerPage, gitBasicsPage } from "./util/preparePages.js"

export const app = express()
app.use(express.json())
app.use(express.static("public"))

/*---------------------------------------HTML-----------------------------------------------*/ 

app.get("/", (req, res) => {
    res.send(homepagePage)
})

app.get("/javascript", (req, res) => {
    res.send(javascriptTopicsPage)
})

app.get("/javascript/basics", (req, res) => {
    res.send(jsBasicsPage)
})

app.get("/javascript/declarations", (req, res) => {
    res.send(declarationsPage)
})

app.get("/javascript/objects", (req, res) => {
    res.send(objectsPage)
})

app.get("/javascript/arrays", (req, res) => {
    res.send(arraysPage)
})

app.get("/javascript/functions", (req, res) => {
    res.send(functionsPage)
})

app.get("/gitBasics", (req, res) => {
    res.send(gitBasicsPage)
})

app.get("/firstExpressServer", (req, res) => {
    res.send(firstExpressServerPage)
})


/*---------------------------------------ROUTES-----------------------------------------------*/

app.listen(process.env.PORT)