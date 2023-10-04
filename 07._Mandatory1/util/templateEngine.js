import fs from "fs"


export function readPage(path){
    return fs.readFileSync(path).toString()
}

export function renderPage(page, config = {}){
    const top = fs.readFileSync("./public/components/top/top.html").toString()
    .replace("$TAB_TITLE", config.tabTitle || "Node Mandatory 1")
    .replace("$CSS_LINKS", config.cssLinks || "")
    const bottom = fs.readFileSync("./public/components/bottom/bottom.html").toString().replace("$SCRIPT_LINKS", config.scriptLinks || "")
    
    return top + page + bottom
}