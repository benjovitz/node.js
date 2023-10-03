import fs from "fs"



export function readPage(path){
    return fs.readFileSync(path).toString()
}

export function renderPage(page, config = {}){
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
    .replace("$TAB_TITLE", config.tabTitle || "PoKEAmon")
    .replace("$CSS_LINKS", config.cssLinks || "")
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
    
    return navbar + page + footer
}