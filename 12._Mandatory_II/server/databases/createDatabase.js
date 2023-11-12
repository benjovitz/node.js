import db from "./connection.js"

const deleteMode = process.argv.findIndex(arg => arg === "delete") === -1 ? false : true

if(deleteMode){
    await db.exec("DROP TABLE IF EXISTS user_infos")
    await db.exec("DROP TABLE IF EXISTS users")
}

await db.exec(`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(35),
    password VARCHAR(255),
    email VARCHAR(255)
)`)

await db.exec(`CREATE TABLE IF NOT EXISTS user_infos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    info TEXT,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
)`)

if(deleteMode){
    await db.run("INSERT INTO users(username, password, email) VALUES ('daniel', '$2b$14$V39/v.CQZKeJfk9kVbOpQupQcUA63aV00b0HKuK60aWV8c72e1HOW', 'dayna.jacobi@ethereal.email')")
    await db.run("INSERT INTO users(username, password, email) VALUES ('karen', '$2b$14$V39/v.CQZKeJfk9kVbOpQupQcUA63aV00b0HKuK60aWV8c72e1HOW', 'dayna.jacobi@ethereal.email')")

    await db.run("INSERT INTO user_infos (info, user_id) VALUES('schmoney moves', 1)")
    await db.run("INSERT INTO user_infos (info, user_id) VALUES('xdd', 1)")
    await db.run("INSERT INTO user_infos (info, user_id) VALUES('not feet pics', 1)")
    await db.run("INSERT INTO user_infos (info, user_id) VALUES('svelte > react', 1)")

    await db.run("INSERT INTO user_infos (info, user_id) VALUES('안녕하세요', 2)")
    await db.run("INSERT INTO user_infos (info, user_id) VALUES('황금배 아저씨', 2)")
    await db.run("INSERT INTO user_infos (info, user_id) VALUES('치약', 2)")
    }