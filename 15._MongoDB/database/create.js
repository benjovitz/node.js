import db from "./connection.js"

await db.albums.insertOne({title: "To Pimp A Butterfly", score: 10})