import jwt from "jsonwebtoken"

const secretKey ="aRandomSecretKeyThatShouldBeLongAndSecure123!@#$%^&*()_"

const correctUser = {
    username: "daniel",
    password: "1234"
}

function generateToken(payload){
    return jwt.sign(payload, secretKey)
}

function verifyToken(token){
    try {
        return jwt.verify(token, secretKey)
    } catch (error) {
        console.log(error)
    }
}

const signInCheck = (token) => {
    const decodedToken = verifyToken(token)
    if(decodedToken.username === correctUser.username &&
        decodedToken.password === correctUser.password){
            return true
        }
}

export {generateToken, signInCheck}