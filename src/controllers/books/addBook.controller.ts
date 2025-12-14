import { Request,Response } from "express"
import { addBook } from "../../prisma-models/bookStore.model";
import { number, z } from "zod";

const AddBookSchema=z.object({
title: z.string().min(3).max(50),
description:z.string().optional(),
author:z.string().min(3).max(30),
genre:z.string().min(3).max(30),
price:z.number().min(1),
user_id:number().min(1),
});

export type TAddBookSchema=z.infer<typeof AddBookSchema> ;

export const addBookController=async(req:Request,res:Response)=>{
const body = req.body;

const parsedData = AddBookSchema.safeParse(body);
if(!parsedData.success){
 return res.status(400).json({
  message:`invalid data !!!`,
 });
};

const addedbook= await addBook(parsedData.data);

res.json({
  message:"book added in bookStore successfully",
  data:addedbook,
});
};