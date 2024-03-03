import { connectDB } from "../config/database";

class UserServices {

    getAllUsersFromDb = async () => {
        try {
            const connection = await connectDB();
            const [users] = await connection.query('SELECT * FROM users');
            await connection.end();

            return users;
        } catch (err) {
            console.log("Erro ao buscar todos os users", err);
            throw err;
        }
    };

    getUserByIdFromDb = async (userId: string) => {
        try {
            const connection = await connectDB();
            const [user] = await connection.query('SELECT * FROM users WHERE id = ?', [userId]);
            await connection.end();

            return user;
        } catch (err) {
            console.log("Erro ao buscar user", err);
            throw err;
        }
    };

    postNewUserToDb = async (username: string, email: string, password: string):Promise<void> => {
        try {
            const connection = await connectDB();
            await connection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
            await connection.end();
        } catch (err) {
            console.log("Erro ao postar user", err);
            throw err;
        }
    };

    updateUserByIdInDb = async (username: string, email: string, password: string, userId: string):Promise<void> => {
        try{ 
            const connection = await connectDB();
            await connection.query('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?', [username, email, password, userId]);
            await connection.end();
        } catch (err) {
            console.log("Erro ao atualizar user", err);
            throw err;
        }
    };

    deleteAllUsersDb = async ():Promise<void> => {
        try {
            const connection = await connectDB();
            await connection.query('DELETE FROM users');
            await connection.end();
        } catch (err) {
            console.log("Erro ao deletar users", err);
        }
    };

    deleteUserByIdInDb = async (userId: string):Promise<void> => {
        try {
            const connection = await connectDB();
            await connection.query('DELETE FROM users WHERE id = ?', [userId]);
            await connection.end();
        } catch (err) {
            console.log("Erro ao deletar user", err);
        }
    };

}

export default UserServices;
