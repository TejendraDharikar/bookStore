import { Request , Response } from "express";
import { deleteBooks } from "../prisma-models/bookStore.model";
export const deletedBookController=async(req:Request,res:Response)=>{
const params = req.params;
const bookId = parseInt(params.bookId as string);

const book=await deleteBooks(bookId);

res.json({
  message:`successfully deleted data from id ${bookId}`,
  data:book,
});
};
