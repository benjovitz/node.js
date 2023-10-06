document.getElementById("getSimpleRes").onclick = getSimpleResponse
document.getElementById("getSimpleRes_clear").onclick = clearSimpleResponse
document.getElementById("getResponseWithParameter").onclick = getRepsonseWithParameter
document.getElementById("simplePostEndpoint").onclick = simplePostEndpoint

async function getSimpleResponse(){
    const response = (await fetch("/getSimpleResponse"))
    const result = await response.json()
    document.getElementById("getSimpleRes_res").innerText = `${JSON.stringify(result)}`
}

function clearSimpleResponse(){
    document.getElementById("getSimpleRes_res").innerText = ""
}

async function getRepsonseWithParameter(){
    const name = document.getElementById("getResponseWithParameter_name").value || "Stranger"
    const response = await fetch(`/getResponseWithParameter/${name}`)
    const result = await response.json()
    document.getElementById("getResponseWithParameter_res").value = `${JSON.stringify(result.data.message)}`
    document.getElementById("getResponseWithParameter_json").innerText = JSON.stringify(result)
}

async function simplePostEndpoint(){
    const body = {}
    body.key = document.getElementById("simplePostEndpoint_value").value || "some value"
    const response = await fetch("/simplePostEndpoint",{
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    const result = await response.json()
    console.log(result)
    document.getElementById("simplePostEndpoint_res").innerText = JSON.stringify(result)
}