const express = require("express")

const app = express()


console.log(Date())

console.log(new Date().getMonth())

console.log(Date.now())

app.get("/date", (req, res) => {
    res.send({data:{today: Date()}})
})

app.get("/month", (req, res) => {
    const date = Date().split(" ")
    res.send({data:{month: date[1]}})
})

app.get("/month2", (req, res) => {
    const currentMonth = new Date().toLocaleDateString("en-US", {month: "long"})
    res.send({data: currentMonth})
})  

app.get("/day", (req, res) => {
    const date = Date().split(" ")
    res.send({ data:{ day: date[0] } })
})

app.get("/day2", (req, res) => {
    const currentDay = new Date().toLocaleDateString("en-US", {weekday: "long"})
    res.send({data: currentDay})
})


const PORT = 8080
app.listen(PORT, (req, res) => {
    console.log("Server running on port:", PORT)
})