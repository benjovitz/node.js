<script>

    import {fridgeMessages} from "../../store/fridgeMessages.js"

    export let onRemoveFridgeMessage
</script>

<h2>==================</h2>
{#each $fridgeMessages as fridgeMessage, i}
<p>{fridgeMessage}</p>
{/each}
<h2>==================</h2>


<h3>Svelte Family Home</h3>



<p>______________________________</p>
<slot></slot>
<p>______________________________</p>

