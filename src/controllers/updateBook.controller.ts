import { Request, Response } from "express";
import { updateBooks } from "../prisma-models/bookStore.model";

export const updatedBookController=(req:Request,res:Response)=>{
const body=req.body;
const params=req.params;
const bookId=parseInt(params.bookId as string);

const updatedBook= updateBooks(bookId,body);

res.json({
  message:`successfully updated the data in book id ${bookId}`,
  data:updatedBook,
});
};