//use const when possible
const breakTime = "09:27"
let consoleLogCounter = 0

//use comma in console log
console.log("Lets take a break at:",breakTime)
consoleLogCounter++
//console.log(`Lets take a break at: ${breakTime}`)
//type coercion

//How to make strings
console.log("first string '''''")
console.log('second string """""')
console.log(`third 
string ${breakTime}`)
consoleLogCounter+= 3

console.log(consoleLogCounter)