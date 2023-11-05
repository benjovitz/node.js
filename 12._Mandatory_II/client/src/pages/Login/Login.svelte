<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	import { user } from "../../stores/userStore";
    import toast, {Toaster} from "svelte-french-toast"

	const navigate = useNavigate();
	const location = useLocation();

	let username;
	let password;

    async function signIn(){
        const response = await fetch("http://localhost:8080/auth/login",{
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {
                "content-type": "application/json"
            },
            credentials: "include"
        })
        const result = await response.json()
            if(!response.ok){
                toast.error(result.data)
        } else {
            toast.success(result.data)
            user.set({ username, password });
            const from = ($location.state && $location.state.from) || "/";
		    navigate(from, { replace: true });
        } 
    }
    
</script>

<h1>Sign in</h1>
<input bind:value={username} type="text" placeholder="username"> <br>
<input bind:value={password} type="password" placeholder="password"><br>
<button on:click={signIn}>sign in</button>

<Toaster />