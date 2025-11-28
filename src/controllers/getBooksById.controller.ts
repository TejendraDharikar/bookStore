import { Request,Response } from "express"
import { getBookById } from "../prisma-models/bookStore.model";

export const getBookByIdController=(req:Request,res:Response)=>{
try {
  const params=req.params;
const bookId= parseInt(params.bookId as string);

const Book=getBookById(bookId);

res.json({
  message:`sucessfully fetched data from id ${bookId}`,
  data:Book
});
 } catch (error:any) {
    res.status(404).json({ error: error.message });
  };
};