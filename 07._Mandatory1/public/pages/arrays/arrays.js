const array = ["Red", "Green", "Blue", "Black"]
const container = document.getElementById("arrayContainer")

document.getElementById("lengthBtn").onclick = getLength
document.getElementById("popBtn").onclick = popArray
document.getElementById("pushBtn").onclick = pushArray
document.getElementById("shiftBtn").onclick = shiftArray
document.getElementById("unshiftBtn").onclick = unshiftArray

renderArray()

function renderArray(){
    container.innerHTML = array.map(element =>`
    <h2>${element}</h2>`).join("")
}

function getLength(){
    document.getElementById("lengthField").value = array.length
}

function popArray(){
    document.getElementById("popField").value = array.pop() || "nothing to pop"
    renderArray()
}

function pushArray(){
    if (array.length >= 8 ){
        document.getElementById("pushField").value = "At max capacity"
    } else {
        const elementToPush = document.getElementById("pushField").value || "Random color"
        array.push(elementToPush)
        renderArray()
    }
    
}

function shiftArray(){
    document.getElementById("shiftField").value = array.shift() || "nothing to shift"
    renderArray()
}

function unshiftArray(){
    if (array.length >= 8 ){
        document.getElementById("unshiftField").value = "At max capacity"
    } else {
        const elementToPush = document.getElementById("unshiftField").value || "Random color"
        array.unshift(elementToPush)
        renderArray()
    }
    
}