const monkey = {
    name: "Bozo",
    age: 7,
    makeNoise: () => console.log("monkey noises")
}

monkey.height = 153

console.log(monkey)
console.log(monkey.name)

console.log(Object.keys(monkey))

console.log(Object.values(monkey))
monkey.makeNoise()

const array = ["herj",3]
console.log(array.push([2,78]))
console.log(array.splice(0))