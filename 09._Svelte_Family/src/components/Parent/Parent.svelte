<script>
    import Child from "../Child/Child.svelte";
    import { fridgeMessages } from "../../store/fridgeMessages";

    export let name
    export let children

    let cookieJar = ["🍪","🍪","🍪","🍪","🍪"]

    function handleShowLOve(childName){
        console.log(`my name is ${name} and ${childName} loves me`)
    }

    function handleEatCookie(childName){
        if(cookieJar.length > 0){
            console.log(`${childName} ate a cookie from ${name}`)
            cookieJar.pop()
            cookieJar = cookieJar
        } else{
            console.log("no more cookies")
        }
        
    }

    function removeFridgeMessage(){
        fridgeMessages.set(["Fridge Messages Below:"])
    }

    function addCookie(){
        cookieJar = cookieJar
        cookieJar.push("🍪")
    }
</script>

<h1>{name}</h1>
<p>{cookieJar}</p>
<button on:click={addCookie}>add cookie</button>

<button on:click={removeFridgeMessage}>Remove fridge Messages</button>

{#each children as child}
<Child child={child} onShowLove={handleShowLOve} onEatCookie={handleEatCookie}/>
{/each}