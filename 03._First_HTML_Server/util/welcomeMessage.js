const welcomeMessageJson = require("./welcomeMessage.json")

function getWelcomeMessage(clientname){
    if(!clientname){
        return welcomeMessageJson.noNameWelcomeMessage
    } else {
        return welcomeMessageJson.nameWelcomeMessage.replace("$clientname", clientname)
    }
}

module.exports = {
    getWelcomeMessage,
    name: "Daniel"
}