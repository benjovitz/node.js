import Router from "express"
import { mountains, checkFullBody, findMountain } from "../util/mountains.js"

const router = Router()

router.get("/mountains", (req, res) => {
    res.send({data: mountains})
})
 
router.get("/mountains/:id", (req, res) => {

    const mountain = findMountain(Number(req.params.id))
    mountain ? res.send({data: mountain}) : res.sendStatus(404)
})
  
router.post("/mountains", (req, res) => {

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

router.patch("/mountains/:id", (req, res) => {
const body = req.body
const mountainToUpdate = findMountain(Number(req.params.id))

if(mountainToUpdate){

    mountainToUpdate.name = body?.name ?? mountainToUpdate.name
    mountainToUpdate.elevation_meters = body?.elevation_meters ?? mountainToUpdate.elevation_meters

    res.sendStatus(201)
} else {
    res.sendStatus(404)
}


})

router.put("/mountains/:id", (req, res) => {
const mountain = findMountain(Number(req.params.id))

const body = req.body

if(mountain){
    if(checkFullBody(body)){

    mountain.name = body.name
    mountain.elevation_meters = body.elevation_meters 

    res.sendStatus(200)
    } else{
    res.status(406).send({message: "Need a full body"})
    }   
} else {
    res.sendStatus(404)
}

})

router.delete("/mountains/:id", (req, res) => {
const id = Number(req.params.id)
const mountainIndex = mountains.findIndex(mountain => mountain.id === id)

if(mountainIndex !== -1){

    mountains.splice(mountainIndex, 1)
    res.send(200)

} else {
    res.sendStatus(404)
}
})

export default router