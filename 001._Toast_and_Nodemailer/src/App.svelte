<script>
import toast, { Toaster } from "svelte-french-toast"


function sendMail(){
    console.log("sending mail")
    toast.success("IT WORKS")
}
</script>

<button on:click={sendMail}>Send mail</button>
<input type="text">
<Toaster />