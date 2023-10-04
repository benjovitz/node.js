console.log(`Date(): ${Date()}`)

console.log(`new Date(): ${new Date()}`)

console.log(`Date.now(): ${Date.now()}`)

console.log(new Date().toLocaleDateString("da-DK", {weekday: "long", month: "long", year: "numeric"}))
console.log(new Date().toLocaleDateString("da-DK", {timeZone: "UTC", hour: "numeric"}))
console.log(new Date().toLocaleDateString("da-DK", {hour: "numeric"}))
