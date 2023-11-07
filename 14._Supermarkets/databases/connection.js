import sqlite3  from "sqlite3";
import { open } from "sqlite"

const connection = await open({
    filename: "supermarkets.sqlite",
    driver: sqlite3.Database
})

console.log(connection)

export default connection