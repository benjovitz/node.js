    //"use strict"
whatIsThis = "never ever "

const arguments = 123

var globalVariable = "never ever also"
    //global scope

console.log(whatIsThis)

function anotherScope(){
    //function scope
}

{
    //block scope
}

{
    console.log("Hello i am a block scope")
}


{
    var someVariable = true
    {
        var someVariable = false
    }
    console.log(someVariable)
    //false because of var is a global variable
}


{
    var someVariable = true
    {
        var someVariable = false
    }
    console.log(someVariable)
    //false because of var is a global variable
}

