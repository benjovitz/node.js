<script>
    import { onMount } from "svelte";
    let infoList = []

    onMount( async() => {
        const response = await fetch("http://localhost:8080/api/info",{
            credentials: "include"
        })
        const result = await response.json()
        infoList = result.data
    })

    async function handleAddInfo(){

    }
</script>


<h1>Your Info</h1>
{#each infoList as item}
<h4>{item.info}</h4>
{/each}