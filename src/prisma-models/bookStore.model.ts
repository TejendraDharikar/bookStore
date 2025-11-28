import { Prisma } from "../generated/prisma";
import { prisma } from "../lib/prisma";


export interface Book{
  id:number;
  name:string;
  auther:string;
  genre:string;
};


export async function addBook(data:Prisma.booksCreateInput){
const addBook=await prisma.books.create({
  data:{
    title:data.title,
    author:data.author,
    genre:data.genre,
    price:data.price,
    user_id:data.user_id
  }
})
return addBook;
};
export async function updateBooks(bookId:number,body:Book){
  const book =await prisma.books.update({
    where:{
      book_id:bookId
    },
    data:body
})
 
  return book;
};

export async function deleteBooks(bookId:number){

const book=await prisma.books.delete({
  where:{
    book_id:bookId
  }
})
return book;

};

export async function getAllBooks(query:{author?:string,genre?:string}){
  const book = await prisma.books.findMany({
    where: {
      AND: [
        query.author ? { author: query.author } : {}, 
        query.genre ? { genre: query.genre } : {}
      ]
    }
  })
  return book;
}

export async function getBookById(bookId:number){
const book =await prisma.books.findUnique({
  where:{
    book_id:bookId
  }
})

    return book;
};