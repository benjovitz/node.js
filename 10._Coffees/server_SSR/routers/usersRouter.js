import { Router } from "express";

const router = Router()

router.get("/users", (req, res) => {
    console.log(req.path, ":", req.session)
    if(!req.session.nameOfUser){
        res.send({data: "who dis"})
    } else {
        res.send({data: `Your name is ${req.session.nameOfUser}`})
    }
   
})

router.get("/users/:registerUserName", (req, res) => {
    console.log(req.path, ":", req.session)
    req.session.nameOfUser = req.params.registerUserName
    res.send({data: `Your name ${req.session.nameOfUser} is stored in session`})
})

router.get("/users/logout", (req, res) => {
    req.session.nameOfUser = undefined

    //delete req.session.nameOfUser

  /*   req.session.destroy(() => {
        res.send({data: "you are logged out"})
    }) */
   
    res.send({data: "You are logged out"})
})


export default router

