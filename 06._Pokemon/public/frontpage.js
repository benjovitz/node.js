function randomInt(min, max){
    return Math.floor(Math.random() * (max -  + 1) + min)
}

function escapeHTML(string) {
    if (!string) return "";

    return string.replaceAll(`&`, "&amp;")
        .replaceAll(`>`, "&gt;")
        .replaceAll(`<`, "&lt;")
        .replaceAll(`"`, "&quot;")
        .replaceAll(`/`, "&#039;");
}

const randomPokemonId = randomInt(1, 151)

async function getPokemon(id){
   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

   if(!res.ok){

    throw new Error("Couldnt get pokemon")

   } else{
    const pokemon = await res.json()

    console.log(pokemon)

    document.getElementById("pokemon-name").innerText = pokemon.name

    document.getElementById("pokemon-image").innerHTML = `
    <img src="${pokemon.sprites.other.home.front_default}"/>`
   } 
}

getPokemon(randomPokemonId)

