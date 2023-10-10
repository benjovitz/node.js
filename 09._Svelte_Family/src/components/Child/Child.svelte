<script>
    export let child
    export let onShowLove

    export let onEatCookie

    import {fridgeMessages} from "../../store/fridgeMessages.js"

    let customFridgeMessage = ""

    function submitFridgeMessage(){
        //fridgeMessages.set([...$fridgeMessages, customFridgeMessage])
        fridgeMessages.update((storeValue) => {
            storeValue.push(customFridgeMessage)
            return storeValue
        })
        customFridgeMessage = ""
        console.log($fridgeMessages)
    }
</script>
<button on:click={() => onEatCookie(child.name)}>🍪</button>
<button on:click={() => onShowLove(child.name)}>❤️</button>

<input bind:value={customFridgeMessage} type="text" placeholder="write fridge message">
<button on:click={submitFridgeMessage}>Submit fridge message</button>

<div 
class:is-girl={child.isGirl}
class:is-boy={!child.isGirl}
class={child.blackSheep || "not-a-black-sheep"}
>
<h3>{child.name}</h3>
</div>

<style>
    .is-girl{
        border: 1px solid pink;
    }
    .is-boy{
        border: 1px solid blue;
    }
    .not-a-black-sheep{
        background-color: white;
        color: black;
    }
    .medium-black-sheep{
        background-color: grey;
    }
    .ultra-black-sheep{
        background-color: black;
    }
</style>