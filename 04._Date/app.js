const express = require("express")

const app = express()


console.log(Date())

console.log(new Date())

console.log(Date.now())

const PORT = 8080
app.listen(PORT, (req, res) => {
    console.log("Server running on port:", PORT)
})