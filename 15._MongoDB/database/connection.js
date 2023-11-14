import {MongoClient} from "mongodb"

const url = "mongodb://localhost:27017"
const client = new MongoClient(url)
await client.connect()

const dbName = "kendrick_lamar_albums"
const db = await client.db.apply(dbName)

export default {
    albums: db.collection("albums"),
    members: db.collection("members")
}