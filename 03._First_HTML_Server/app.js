const express = require("express")

const app = express()
//app.use(express.json())

const PORT = 8080

console.log(__dirname)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/publicc/home.html`)
})

app.get("/secondPage", (req, res) => {
    res.sendFile(`${__dirname}/public/secondPage.html`)
})

app.listen(PORT, (error)=>{
    error ? console.log(`error running server ${error}`) :  console.log(`server starting on port: ${PORT}`) 
})