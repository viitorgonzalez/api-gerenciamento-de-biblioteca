import { connectDB } from "../config/database";

class BookService {

    getAllBooksDb = async () => {
        try {
            const connection = await connectDB();
            const [books] = await connection.query('SELECT b.title, b.author, b.genre, u.username, u.email FROM books AS b LEFT JOIN users AS u ON b.user_id = u.id');
            await connection.end();

            return books;
        } catch (err) {
            console.log("Erro ao obter livros");
            throw err;
        }
    };

    getBookByBookIdFromDb = async (bookId: string) => {
        try {
            const connection = await connectDB();
            const [book] = await connection.query('SELECT * FROM books WHERE id = ?', [bookId]);
            await connection.end();

            return book;
        } catch (err) {
            console.log("Erro ao obter livro");
            throw err;
        }
    };

    getBookByUserIdDb = async (userId: string) => {
        try {
            const connection = await connectDB();
            const [book] = await connection.query('SELECT b.title, b.author, b.genre, u.username, u.email FROM books AS b LEFT JOIN users AS u ON b.user_id = u.id WHERE b.user_id = ?', [userId]);
            await connection.end();
            return book;
        } catch (err) {
            console.log("Erro ao obter livro");
            throw err;
        }
    };

    postNewBookDb = async (userId: string, title: string , author: string, genre: string): Promise<void> => {
        try {
            const connection = await connectDB();
            await connection.query('INSERT INTO books (user_id, title, author, genre) VALUES (?, ?, ?, ?)', [userId, title, author, genre]);
            await connection.end();         
        } catch (err) {
            console.log("Erro ao postar livro");
            throw err;
        }
    };

    updateBookByIdDb = async (userId: string, title: string, author: string, genre: string, bookId: string): Promise<void> => {
        try {
            const connection = await connectDB();
            await connection.query('UPDATE books SET user_id = ?, title = ?, author = ?, genre = ? WHERE id = ?', [userId, title, author, genre, bookId]);
            await connection.end();
        } catch (err) {
            console.log("Erro ao atualizar livro");
            throw err;
        }
    };

    deleteAllBooksDb = async (): Promise<void> => {
        try {
            const connection = await connectDB();
            await connection.query('DELETE FROM books');
            await connection.end();
        } catch (err) {
            console.log("Erro ao deletar livros");
            throw err;
        }
    };

    deleteBookByIdDb = async (bookId: string): Promise<void> => {
        try {
            const connection = await connectDB();
            connection.query('DELETE FROM books WHERE id = ?', [bookId]);
            await connection.end();
        } catch (err) {
            console.log("Erro ao deletar livro");
            throw err;
        }
    };

}

export default BookService;
