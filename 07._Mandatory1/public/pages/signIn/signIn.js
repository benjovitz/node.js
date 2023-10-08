document.getElementById("signIn_btn").onclick = getToken
const error = document.getElementById("error")
let token

async function getToken(){
    error.innerText = ""
    const user = {}
    user.username = document.getElementById("username").value
    user.password = document.getElementById("password").value

    const response = await fetch("/api/getToken", {
        method: "post",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    if(!response.ok){
        error.innerText = "Something wrong with the server, contact your local church"
    } else {
        const result = await response.json()
        token = result.data
    }
    getMembersPage()
      
    }

    async function getMembersPage(){
        const response = await fetch(`/api/membersPage/${token}`)

        if(!response.ok){
            const result = await response.json()
            error.innerText = result.data
        } else {
            window.location.href = `api/membersPage/${token}`
        }
    }



