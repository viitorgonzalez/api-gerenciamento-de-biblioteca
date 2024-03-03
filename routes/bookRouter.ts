import express from 'express';
import BookController from '../controllers/BookController';

const bookRouter = express.Router();
const bookController = new BookController();

bookRouter.get("/", bookController.getAllBooks);
bookRouter.get("/:id", bookController.getBookById);
bookRouter.post("/", bookController.postNewBook);
bookRouter.put("/:id", bookController.updateBookById);
bookRouter.delete("/", bookController.deleteAllBooks);
bookRouter.delete("/:id", bookController.deleteBookById);

export default bookRouter;
