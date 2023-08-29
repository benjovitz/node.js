//Hoisting
console.log(getRandomInt())

function getRandomInt(min, max) {
    return 5
}


function genericActionPerfomer(genericAction, name){

    return genericAction(name)
}

const jump = (name) => `${name} is jumping`

console.log(genericActionPerfomer(jump, "Lasse"))

const run = (name) => `${name} is running`

function run2(name){
    return `${name} is running`
}

console.log(genericActionPerfomer(run, "Jonathan"))
console.log(genericActionPerfomer(run2, "Jonathan"))

console.log(genericActionPerfomer((name)=>`${name} is sleeping`, "Daniel")) 