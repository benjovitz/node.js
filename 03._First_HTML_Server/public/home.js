fetch("/welcomeMessage?user=Daniel")
   .then((response) => response.json())
   .then((result) => {
    console.log(result.data)
    document.getElementById("welcomeHeader").innerText = result.data
   })