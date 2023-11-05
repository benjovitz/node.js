<script>

    async function handleSendMail(){
        const response = await fetch("http://localhost:8080/mail/contact",{
            method: "post",
            credentials: "include",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({email: document.getElementById("email").value })
        })
        console.log(await response.json())
    }

</script>

<h1>Contact</h1>


    <input type="text" placeholder="name"> <br>
    <input id="email" type="email" placeholder="email" name="email"> <br> <br>
    <textarea name="" id="" cols="100" rows="10"></textarea> <br>
    <button on:click={handleSendMail}>Send email</button>
