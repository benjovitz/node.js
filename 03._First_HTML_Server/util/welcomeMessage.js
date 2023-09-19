function getWelcomeMessage(clientname){
    if(!clientname){
        return "welcome stranger"
    } else {
        return `Welcome ${clientname}`
    }
}

module.exports = {
    getWelcomeMessage
}