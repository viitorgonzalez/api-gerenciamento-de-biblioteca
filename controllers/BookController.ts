import { Request, Response } from 'express';
import BookService from '../services/BookService'

const bookService = new BookService();

class BookController {

    getAllBooks = async (_req: Request, res: Response): Promise<void> => {
        try{
            const books = await bookService.getAllBooksDb();
            res.send(books);
        } catch (err) {
            console.log("Erro ao obter livros");
            res.status(500).json({ message: "Erro ao obter livros" });
        }
    };

    getBookByBookId = async (req: Request, res: Response): Promise<void> => {
        try {
            const bookId = req.params.id;
            const book = await bookService.getBookByBookIdFromDb(bookId);
            res.send(book);
        } catch (err) {
            console.log("Erro ao obter livro");
            res.status(500).json({ message: "Erro ao obter livro" });

        }
    };

    getBookByUserId = async (req: Request, res: Response): Promise<void> => {
        try{
            const userId = req.params.id;
            const book = await bookService.getBookByUserIdDb(userId);
            res.send(book);
        } catch (err) {
            console.log("Erro ao obter livros");
            res.status(500).json({ message: "Erro ao obter livros" });
        }
    };

    postNewBook = async (req: Request, res: Response): Promise<void> => {
        try {
            const {userId, title, author, genre} = req.body;
            bookService.postNewBookDb(userId, title, author, genre);
            res.status(201).json({ message: "Livro criado com sucesso" });
        } catch (err) {
            console.log("Erro ao adicionar livro", err);
            res.status(500).json({ message: "Erro ao adicionar livro"});
        }
    };

    updateBookById = async (req: Request, res: Response): Promise<void> => {
        try {
            const bookId = req.params.id;
            const {userId, title, author, genre} = req.body;
            await bookService.updateBookByIdDb(userId, title, author, genre, bookId);
            res.status(204).json({ message: "Livro atualizado com sucesso" });
        } catch (err) {
            console.log("Erro ao atualizar livro", err);
            res.status(500).json({ message: "Erro ao atualizar livro"});
        }
    };

    deleteAllBooks = async (req: Request, res: Response): Promise<void> => {
        try {
            await bookService.deleteAllBooksDb();
            res.status(204).json({ message: "Livros deletados com sucesso" });
        } catch (err) {
            console.log("Erro ao deletar livros", err);
            res.status(500).json({ message: "Erro ao deletar livros"});
        }
    };

    deleteBookById = async (req: Request, res: Response): Promise<void> => {
        try {
            const bookId = req.params.id;
            await bookService.deleteBookByIdDb(bookId);
            res.status(204).json({ message: "Livro deletado com sucesso" });
        } catch (err) {
            console.log("Erro ao deletar livro", err);
            res.status(500).json({ message: "Erro ao deletar livro"});
        }
    };

}

export default BookController;
