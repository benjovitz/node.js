/*
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
*/

const arr = ["Red", "Green", "Blue", "Black", "White"]

        console.log(arr) 

        console.log(arr[2]) // returns the element from the given index (arrays are 0-based, so this gives us  the 3rd element)

        console.log(`length: ${arr.length}`) // returns length/size of array based on instances in the arrray

        console.log(`join method: ${arr.join(" and ")}`) // return all elements in a single string joined by a chosen separator

        console.log(`pop method: ${arr.pop()}`) // removes last element and returns it
        console.log(arr)

        console.log(`push method: ${arr.push("Pink")}`) // adds new element and returns the new size of the array
        console.log(arr)

        console.log(`shift method: ${arr.shift()}`) // removes first element and returns that element
        console.log(arr)

        console.log(`unshift method: ${arr.unshift("Purple")}`) // add element to the start of the array and returns size
        console.log(arr)

        console.log(`slice method: ${arr.slice(2, 5)}`) //
        console.log(arr)

        console.log(`splice method: ${arr.splice(3, 1, "monkey business")}`) // returns array of deleted elements
        console.log(arr)