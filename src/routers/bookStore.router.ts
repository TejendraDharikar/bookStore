import { Application } from "express";
import { addBookController } from "../controllers/books/addBook.controller";
import { getAllBooksContoller } from "../controllers/books/getAllBooks.controller";
import { getBookByIdController } from "../controllers/books/getBooksById.controller";
import { deletedBookController } from "../controllers/books/deleteBook.controller";
import { updatedBookController } from "../controllers/books/updateBook.controller";


export function bookRouters(app:Application){
  app.post('/books',addBookController);
  app.get('/books',getAllBooksContoller);
  app.get('/books/:bookId',getBookByIdController);
  app.patch('/books/:bookId',updatedBookController);
  app.delete('/books/:bookId',deletedBookController);
};