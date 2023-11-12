import bcrypt from "bcrypt"
import db from "../databases/connection.js"



export async function checkUsernameAndPassword(req, res, next){
    try {
        const users = await db.all(`SELECT * FROM users WHERE username = ?`, [req.body.username.toLowerCase()])
        console.log(users)
        const userToSignIn = users[0]
        req.session.userId = userToSignIn.id
        console.log(userToSignIn)
            if(!userToSignIn){
            res.status(404).send({data: "No user found"})
            } else {
                if(!await bcrypt.compare(req.body.password, userToSignIn.password)){
                    res.status(401).send({data: "Wrong password or username"})
                } else{
                    next()
                }
            }            
    } catch (error) {
        console.log(error)
    }
}

export function checkBody(req, res, next){
    if(!req.body?.username || !req.body?.password){
        res.status(401).send({data: "need both password and username"})
    } else {
        next()
    }
}

export async function checkUsername(req, res, next){
    const users = await db.all("SELECT * FROM users")
    const user = users.findIndex(user => user.username === req.body.username.toLowerCase())
    if(user !== -1){
        res.status(404).send({data: "Username taken"})
    } else {
        next()
    }
}
