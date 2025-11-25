import { Application } from "express";
import { getAllBooksContoller } from "../controllers/getAllBooks.controller";
import { getBookByIdController } from "../controllers/getBooksById.controller";
import { addBookController } from "../controllers/addBook.controller";
import { updatedBookController } from "../controllers/updateBook.controller";
import { deletedBookController } from "../controllers/deleteBook.controller";

export function bookRouters(app:Application){
  app.post('/books',addBookController);
  app.get('/books',getAllBooksContoller);
  app.get('/books/:bookId',getBookByIdController);
  app.patch('/books/:bookId',updatedBookController);
  app.delete('/books/:bookId',deletedBookController);
};