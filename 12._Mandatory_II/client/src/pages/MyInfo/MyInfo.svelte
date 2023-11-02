<script>
    import { onMount } from "svelte";
    let infoList = []

    onMount( async() => {
        const response = await fetch("https://localhost:8080/info",{
            credentials: "include"
        })
        const result = await response.json()
        infoList = result
    })
</script>


<h1>Your Info</h1>
{#each infoList as info}
<h4>{info}</h4>
{/each}