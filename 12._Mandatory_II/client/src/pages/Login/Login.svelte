<!-- <script>
    import toast, {Toaster} from "svelte-french-toast"
    import { useNavigate, useLocation } from "svelte-navigator";
    import { user } from "../../stores/userStore.js";

    const navigate = useNavigate();
	const location = useLocation();

    let usernameInput = ""
    let passwordInput = ""

    async function signIn(){
        const loginInfo = {username:usernameInput, password: passwordInput}

        const response = await fetch("http://localhost:8080/auth/login",{
            method: "POST",
            body: JSON.stringify(loginInfo),
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
            user.set({username: usernameInput, password: passwordInput})
            const from = ($location.state && $location.state.from) || "/";
		    navigate(from, { replace: true });
        } 
    }
</script>

<h1>Sign in</h1>
<input bind:value={usernameInput} type="text" placeholder="username"> <br>
<input bind:value={passwordInput} type="password" placeholder="password"><br>
<button on:click={signIn}>sign in</button>

<h3>Login</h3>
<form on:submit={signIn}>
	<input
		bind:value={usernameInput}
		type="text"
		name="username"
		placeholder="Username"
	/>
	<br />
	<input
		bind:value={passwordInput}
		type="password"
		name="password"
		placeholder="Password"
	/>
	<br />
	<button type="submit">Login</button>
</form> 
<Toaster /> -->

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
        } 
    }
    

	function handleSubmit() {
		signIn()
        if($user){
        const from = ($location.state && $location.state.from) || "/";
		navigate(from, { replace: true });
        }
		
	}
</script>

<!-- <h3>Login</h3>
<form on:submit={handleSubmit}>
	<input
		bind:value={username}
		type="text"
		name="username"
		placeholder="Username"
	/>
	<br />
	<input
		bind:value={password}
		type="password"
		name="password"
		placeholder="Password"
	/>
	<br />
	<button type="submit">Login</button>
</form> -->

<h1>Sign in</h1>
<input bind:value={username} type="text" placeholder="username"> <br>
<input bind:value={password} type="password" placeholder="password"><br>
<button on:click={handleSubmit}>sign in</button>

<Toaster />