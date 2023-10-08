import { Router } from "express";
import { 
    homepagePage, 
    javascriptTopicsPage, 
    jsBasicsPage, 
    declarationsPage, 
    objectsPage, 
    arraysPage, 
    functionsPage, 
    firstExpressServerPage, 
    gitBasicsPage, 
    firstRestApiPage,
    apiExamplePage,
    frontendJsPage,
    signInPage
} from "../util/preparePages.js"

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

router.get("/firstRestApi", (req, res) => {
    res.send(firstRestApiPage)
})

router.get("/apiExample", (req, res) => {
    res.send(apiExamplePage)
})

router.get("/frontendJs", (req, res) => {
    res.send(frontendJsPage)
})

router.get("/signIn", (req, res) => {
    res.send(signInPage)
})

export default router