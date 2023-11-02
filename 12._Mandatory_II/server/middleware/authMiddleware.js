import { users } from "../util/userMock.js";

function checkUsernameAndPassword(req, res, next){
    const userToSignIn = req.body
    const check = users.find(user => user.username === userToSignIn.username)
    if(!check){
        res.status(401).send({data: `No user found with username ${req.body.username}`})
    } else if(check.password !== userToSignIn.password){
        res.status(401).send({data: "Wrong password"})
    } else {
        next()
    }
    
}

function checkBody(req, res, next){
    if(!req.body?.username || !req.body?.password){
        res.status(401).send({data: "need both password and username"})
    } else {
        next()
    }
}

export {checkBody, checkUsernameAndPassword}