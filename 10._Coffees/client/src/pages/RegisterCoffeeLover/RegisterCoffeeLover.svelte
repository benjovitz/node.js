<script>
    import { navigate } from "svelte-navigator";
    let coffeeLoverName = ""


    async function submitCoffeeLoverName(){
        const response = await fetch(`http://localhost:8080/users/${coffeeLoverName}`, {
            credentials: "include"
        })
        navigate("/who-is-u")
    }
</script>

<input bind:value={coffeeLoverName} type="text">

<button on:click={submitCoffeeLoverName}>Submit</button>