'use strict';

const myConstant = "Hello World";

eval("let x = 2");
const x = 3;

var publicVariable = "public variable";

const defaultValue = 2;

let message = "";
{
let console = "Output";

console = null
}


let myArguments = [1, 2, 3];

myArguments = null; 

function alerting() {
    message = console;
 }
/*
 delete 
 
*/
function searchingForTrouble(trouble) {
    trouble = true;
}

function logMessage(guard="") {
    message = "Everything is fine.";
    if (!guard) {
        // The task is to print "Everything is fine." here.
        console.log(message);
    }
}

logMessage(NaN);

const everythingIsFine = (value) =>{
    
}

everythingIsFine(true);
