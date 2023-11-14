import db from "./connection.js"

await db.albums.updateOne({title: "To Pimp A Butterfly"}, {$set: {label: "TDE"}})