import { Request, Response } from "express";
import z from "zod";
import { updateBooks } from "../../prisma-models/bookStore.model";

const UpdateBookSchema = z.object({
title: z.string().min(3).max(50).optional(),
description:z.string().optional(),
author:z.string().min(3).max(30).optional(),
genre:z.string().min(3).max(30).optional(),
price:z.number().min(1).optional(),
});

export type TUpdateBookSchema = z.infer<typeof UpdateBookSchema> ;

export const updatedBookController=async(req:Request,res:Response)=>{
const body=req.body;
const bookId=Number(req.params.bookId);

const parsedData= UpdateBookSchema.safeParse(body);

if(!parsedData.success){
  res.status(400).json({error:parsedData.error});
  return;
}

const updatedBook=await updateBooks(bookId,parsedData.data);

res.json({
  message:`successfully updated the data in book id ${bookId}`,
  data:updatedBook,
});
};