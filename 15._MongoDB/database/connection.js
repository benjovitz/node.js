import {MongoClient} from "mongodb"

const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url)
await client.connect()

const dbName = "kendrick_lamar_albums"
const db = await client.db(dbName)

export default {
    albums: db.collection("albums"),
    members: db.collection("members")
}