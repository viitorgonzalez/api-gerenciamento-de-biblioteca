import { connectDB } from '../config/database';
import { config } from 'dotenv';

config();

async function createSchemaAndTables() {
    try {
        const connection = await connectDB();
        await connection.query(`USE ${process.env.DB_NAME}`);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(100) NOT NULL
                
            )
        `);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS books (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT,
                title VARCHAR(100) NOT NULL,
                author VARCHAR(100) NOT NULL,
                genre VARCHAR(100) NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        `);
        console.log('Esquema e tabelas criados com sucesso');
        await connection.end();
    } catch(error) {
        console.error('Erro ao criar esquema e tabelas:', error);
    }
}

createSchemaAndTables();
