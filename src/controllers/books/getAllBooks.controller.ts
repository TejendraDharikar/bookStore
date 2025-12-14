import { Request,Response } from "express"
import { getAllBooks } from "../../prisma-models/bookStore.model";
import z from "zod";


const BookQuerySchema = z.object({
author:z.string().min(3).max(30).optional(),
genre:z.string().min(3).max(30).optional(),
})

export type TBookQuerySchema = z.infer<typeof BookQuerySchema> ;

export const getAllBooksContoller = async(req:Request,res:Response)=>{

const query = req.query;
const parsedQuery = BookQuerySchema.safeParse(query);
if(!parsedQuery.success){
  return res.status(400).json({
 message:`invalid query`,
 errors:parsedQuery.error,
  });
};

const bookStore =await getAllBooks(parsedQuery.data);

res.json({
  message:"data fetched",
  data:bookStore
});
};