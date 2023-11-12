import bcrypt from "bcrypt"

const saltRounds = 14

const plainTextPassword = "1234"

const hashedPasswordOutput = "$2b$14$9bHAomGFUozjSldbdxTyoeotdfQF8j/Nniev73U6UhVsVxcRwH0oO"

const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds)

const compareResult = await bcrypt.compare(plainTextPassword, hashedPasswordOutput)

console.log(hashedPassword)
console.log(compareResult)