import { getExtinctDinosaurs } from "./dinosaurFactory.js"


function getDinfo(){
    const extinctDinosaurs = getExtinctDinosaurs()
    console.log(`There are ${extinctDinosaurs.length} of extinct dinosaur(s)`)
    console.table(extinctDinosaurs)
}

getDinfo()


