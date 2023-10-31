<script>
    import { onMount } from "svelte";
    let coffeeLoverName = ""

    onMount( async() => {
        const response = await fetch("http://localhost:8080/users",{
            credentials: "include"
        })
        const result = await response.json()

        coffeeLoverName = result.data
    })
</script>

<h1>{coffeeLoverName} and you love dat coffee</h1>