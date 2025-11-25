import { Request , Response } from "express";
import { deleteBooks } from "../models/bookStore.model";
export const deletedBookController=(req:Request,res:Response)=>{
const params = req.params;
const bookId = parseInt(params.bookId as string);

const book=deleteBooks(bookId);

res.json({
  message:`successfully deleted data from id ${bookId}`,
  data:book,
});
};
