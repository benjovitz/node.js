import db from "./connection.js"

/* const allAlbums = await db.albums.find().toArray()
console.log(allAlbums) */

const favAlbum = await db.albums.find({title: "To Pimp A Butterfly"}).toArray()
console.log(favAlbum)