import { Request,Response } from "express"
import { addBook } from "../models/bookStore.model";

export const addBookController=(req:Request,res:Response)=>{
const body = req.body;

const book=addBook(body);

res.json({
  message:"book added in bookStore successfully",
  data:book,
});
};