import fs from "fs"



export function readPage(path){
    return fs.readFileSync(path).toString()
}

export function renderPage(page){
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
    
    return navbar + page + footer
}