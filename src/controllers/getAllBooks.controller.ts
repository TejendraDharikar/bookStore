import { Request,Response } from "express"
import { getAllBooks } from "../prisma-models/bookStore.model";

export const getAllBooksContoller = async(req:Request,res:Response)=>{
const query = req.query;

const bookStore =await getAllBooks({author:query.author as string, genre:query.genre as string});

res.json({
  message:"data fetched",
  data:bookStore
});
};