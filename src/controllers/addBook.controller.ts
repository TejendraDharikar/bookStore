import { Request,Response } from "express"
import { addBook } from "../prisma-models/bookStore.model";

export const addBookController=async(req:Request,res:Response)=>{
const body = req.body;

const addedbook= await addBook(body);

res.json({
  message:"book added in bookStore successfully",
  data:body,
});
};