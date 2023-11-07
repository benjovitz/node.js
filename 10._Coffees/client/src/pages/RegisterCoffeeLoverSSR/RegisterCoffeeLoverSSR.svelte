<script>
    import { navigate } from "svelte-navigator";
    import { BASE_URL } from "../../store/global";
    let coffeeLoverName = ""


    async function submitCoffeeLoverName(){
        const response = await fetch(`${$BASE_URL}/api/coffeeLovers`, {  
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({coffeeLover: coffeeLoverName})
        })

        if(response.ok){
            navigate("/who-is-ussr")
        }
        
    }
</script>

<input bind:value={coffeeLoverName} type="text">
<button on:click={submitCoffeeLoverName}>Submit</button>