import express from "express"
import path from "path"

import { homepagePage, javascriptTopicsPage, jsBasicsPage, declarationsPage, objectsPage, arraysPage, functionsPage, firstExpressServerPage, gitBasicsPage } from "./util/preparePages.js"
import { mountains } from "./util/mountains.js"
const app = express()
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


/*---------------------------------------SIMPLE ENDPOINT-----------------------------------------------*/

app.get("/getSimpleResponse", (req, res) => {
    res.send({data: "Hello there"})
})

app.get("/getResponseWithParameter/:name", (req, res) => {
    const name = req.params.name
    res.send({data:{
        message: `Hello there ${name}`,
        params: req.params
    
    }
    })
})

app.post("/simplePostEndpoint", (req, res) => {
    res.send({data: req.body})
})

/*---------------------------------------MOUNTAINS-----------------------------------------------*/


app.get("/mountains", (req, res) => {
    res.send({data: mountains})
 })
 
 app.get("/mountains/:id", (req, res) => {
 
    const mountain = findMountain(Number(req.params.id))
     
    mountain ? res.send({data: mountain}) : res.sendStatus(404)
 })
  
 app.post("/mountains", (req, res) => {
 
    const body = req.body
 
    if(checkFullBody(body)){
    const lastId = mountains[mountains.length - 1].id
    const newMountain = body
    newMountain.id = lastId + 1
    
    mountains.push(newMountain)
 
    res.sendStatus(201)
   } else {
    res.status(406).send({message: "Need a full body"})
   }
  
   
 })
 
 app.patch("/mountains/:id", (req, res) => {
   const body = req.body
   const mountainToUpdate = findMountain(Number(req.params.id))
 
   if(mountainToUpdate){
 
    mountainToUpdate.name = body?.name ?? mountainToUpdate.name
    mountainToUpdate.elevation_meters = body?.elevation_meters ?? mountainToUpdate.elevation_meters
    mountainToUpdate.latitude = body?.latitude ?? mountainToUpdate.latitude
    mountainToUpdate.longitude = body?.longitude ?? mountainToUpdate.longitude
    mountainToUpdate.description = body?.description ?? mountainToUpdate.description
 
    res.sendStatus(201)
   } else {
    res.sendStatus(404)
   }
 
 
 })
 
 app.put("/mountains/:id", (req, res) => {
   const mountain = findMountain(Number(req.params.id))
 
   const body = req.body
 
   if(mountain){
     if(checkFullBody(body)){
       mountain.name = body.name
       mountain.elevation_meters = body.elevation_meters
       mountain.latitude = body.latitude
       mountain.longitude = body.longitude
       mountain.description = body.description
   
       res.sendStatus(200)
     } else{
       res.status(406).send({message: "Need a full body"})
     }   
   } else {
     res.sendStatus(404)
   }
 
 })
 
 app.delete("/mountains/:id", (req, res) => {
   const id = Number(req.params.id)
   const mountainIndex = mountains.findIndex(mountain => mountain.id === id)
 
   if(mountainIndex !== -1){
 
     mountains.splice(mountainIndex, 1)
     res.send(200)
 
   } else {
     res.sendStatus(404)
   }
 })
 
 function findMountain(id){
 
     if(!isNaN(id)){
 
     const mountain = mountains.find((mountain) => mountain.id === id)
 
     return mountain
     } 
     return null
 }
 
 function checkFullBody(body){
   if (
     body.name &&
     body.elevation_meters &&
     body.latitude &&
     body.longitude &&
     body.description
   ){
     return true
   }
   return false
 }
 

app.listen(process.env.PORT)