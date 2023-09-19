const express = require("express")
const { getWelcomeMessage } = require("./util/welcomeMessage.js")

const app = express()
app.use(express.static("public"))
//app.use(express.json())

const PORT = 8080

console.log(__dirname)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/home.html`)
})

app.get("/welcomeMessage", (req, res) => {
    const user = req.query?.user
    const welcomeMessage = getWelcomeMessage(user)
    res.send({data: welcomeMessage})
})

app.get("/secondPage", (req, res) => {
    res.sendFile(`${__dirname}/public/secondPage.html`)
})

app.listen(PORT, (error)=>{
    error ? console.log(`error running server ${error}`) :  console.log(`server starting on port: ${PORT}`) 
})