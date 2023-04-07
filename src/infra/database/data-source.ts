import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm"

const port = Number(process.env.DB_PORT)

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [`src/entities/*.{ts,js}`],
    migrations: [`${__dirname}/migrations/*.{ts,js}`],
})