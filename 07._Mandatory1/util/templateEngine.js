import fs from "fs"


export function readPage(path){
    return fs.readFileSync(path).toString()
}