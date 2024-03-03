import { config } from 'dotenv';

config();

const mysql = require('mysql2/promise');

export async function connectDB() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    console.log('Conectado ao banco de dados MySQL')
    return connection;
}
