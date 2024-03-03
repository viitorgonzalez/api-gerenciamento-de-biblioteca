import { Request, Response } from 'express';

class BookController {

    getAllBooks = (req: Request, res: Response) => {
        res.send("getAllBooks");
    }

    getBookById = (req: Request, res: Response) => {
        res.send("getAllBooksById");
    }

    postNewBook = (req: Request, res: Response) => {
        res.send("newBookPosted");
    }

    updateBookById = (req: Request, res: Response) => {
        res.send("BookUpdated");
    }

    deleteAllBooks = (req: Request, res: Response) => {
        res.send("AllBooksDeleted");
    }

    deleteBookById = (req: Request, res: Response) => {
        res.send("BookDeleted");

    }

}

export default BookController;
