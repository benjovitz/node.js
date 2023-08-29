const express  = require("express")

const app = express()

app.get("/", (req, res)=> {
    res.send({data: "this is data"})
})

app.get("/dog",(req, res)=> {
    res.send({dog: "woof"})
})

app.get("/dog/:id", (req, res)=> {
    const id = req.params.id
    res.send({dog: "meow", id})
})

let balance = 100
app.get("/wallet/:withdrawalAmount", (req, res)=> {

    if (balance < 0) {

        res.send({message: "You can't withdraw. No more money left"})

    } else if(balance - req.params.withdrawalAmount <0) {

        res.send({message: "You dont have that kind of money"})

    } else {

        balance = balance - req.params.withdrawalAmount
        
        res.send({withdrawal: `You've withdrawn ${req.params.withdrawalAmount}`, balance})
    }

})

app.listen(8080)