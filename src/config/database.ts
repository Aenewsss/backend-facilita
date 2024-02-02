import { Pool } from "pg";
import { config } from "dotenv"
config()

const db = new Pool({
    host: process.env.DB_URL,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

export const initializeDb = () => db.connect((err) => {
    if (err) console.error(err)
    console.log('database connected')
})

export default db