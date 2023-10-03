<script>
  import Field from "./lib/Field.svelte";
  import Tractor from "./lib/Tractor.svelte";
  import Farmer from "./lib/Farmer.svelte";

  const tractors = ["🚜", "🚜", "🚜", "🚜"]

  const name = "Josh"

  const showTractor = true
  const welcomeMessage = "Welcome to Svelte"
  console.log("hello")
</script>

<Farmer {name}/>

{#if showTractor}
<Tractor tractors={tractors} />
{/if}
<Field />
<h1>Hello</h1>
<h2 id="welcome-message">{welcomeMessage}</h2>

<style>
  #welcome-message{
    color: aquamarine;
  }
</style>