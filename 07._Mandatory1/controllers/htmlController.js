import { Router } from "express";
import { homepagePage, javascriptTopicsPage, jsBasicsPage, declarationsPage, objectsPage, arraysPage, functionsPage, firstExpressServerPage, gitBasicsPage } from "../util/preparePages.js"

const router = Router()

router.get("/", (req, res) => {
    res.send(homepagePage)
})

router.get("/javascript", (req, res) => {
    res.send(javascriptTopicsPage)
})

router.get("/javascript/basics", (req, res) => {
    res.send(jsBasicsPage)
})

router.get("/javascript/declarations", (req, res) => {
    res.send(declarationsPage)
})

router.get("/javascript/objects", (req, res) => {
    res.send(objectsPage)
})

router.get("/javascript/arrays", (req, res) => {
    res.send(arraysPage)
})

router.get("/javascript/functions", (req, res) => {
    res.send(functionsPage)
})

router.get("/gitBasics", (req, res) => {
    res.send(gitBasicsPage)
})

router.get("/firstExpressServer", (req, res) => {
    res.send(firstExpressServerPage)
})

export default router