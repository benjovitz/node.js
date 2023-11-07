import bcrypt from "bcrypt"

const saltRounds = 15

const plainTextPassword = "karen123"

const hashedPasswordOutput = "$2b$15$plWg0FwERFfjo.nHF4tnCO.79y5Y/C6WyVbpdMVajGbqe.6M6/HJW"

const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds)

const compareResult = await bcrypt.compare(plainTextPassword, hashedPasswordOutput)

console.log(compareResult)