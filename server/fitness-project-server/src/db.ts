import mysql from "mysql2/promise";
import { tables } from "./model/tables";

let db: mysql.Connection;

export async function connectMySQL() {
    try {
        db = await mysql.createConnection({
            host: process.env.DB_HOSTURL,
            port: Number(process.env.DB_PORT) || 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        console.log("Connected to MySQL");

        try {
            for (const table of Object.values(tables)) {
                const query = `CREATE TABLE IF NOT EXISTS ${table.name} (${table.content})`;
                await dbQuery(query);
            }
            console.log("Tables created or verified successfully");
        } catch (err: any) {
            console.error("Error creating tables:", err.message);
        }
    } catch (err: any) {
        console.error("Error connecting to MySQL:", err.message);
    }
}

export async function dbQuery(query: string, params: any[] = []) {
    try {
        const [results] = await db.query(query, params);
        return results;
    } catch (err: any) {
        console.error("Error running query: ", err.message);
        throw err;
    }
}