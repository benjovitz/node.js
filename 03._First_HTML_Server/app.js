const express = require("express")

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
    user ? res.send({data: `welcome to the jungle ${user}`}) : res.send({data: `welcome to the jungle stranger`})
})

app.get("/secondPage", (req, res) => {
    res.sendFile(`${__dirname}/public/secondPage.html`)
})

app.listen(PORT, (error)=>{
    error ? console.log(`error running server ${error}`) :  console.log(`server starting on port: ${PORT}`) 
})