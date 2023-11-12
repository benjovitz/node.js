<script>
import toast, {Toaster} from "svelte-french-toast";

let username
let email
let password1
let password2

async function handleSignUp(){

    if(!username || !password1 || !password2){
        toast.error("please fill out all fields")
    }else if(password1 !== password2){
        toast.error("password not identical")
    } else{
        const response = await fetch("http://localhost:8080/auth/signup",{
            credentials: "include",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({username: username, password: password1, email: email}),
            method: "POST"
        })
        const result = await response.json()
        if(!response.ok){
            toast.error(result.data)
        } else {
            toast.success("You are signed up! 💀")
        }
    }
}

</script>

<h1>Sign Up</h1>

<input bind:value={username} type="text" placeholder="username"> <br> <br>
<input bind:value={email} type="email" placeholder="email"> <br> <br>

<input bind:value={password1} type="password" placeholder="password"> <br> <br>
<input bind:value={password2} type="password" placeholder="repeat password"> <br> <br>

<button on:click={handleSignUp}>Sign Up</button>
<Toaster />