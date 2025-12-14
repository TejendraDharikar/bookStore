import { TAddBookSchema } from "../controllers/books/addBook.controller";
import { TBookQuerySchema } from "../controllers/books/getAllBooks.controller";
import { TUpdateBookSchema } from "../controllers/books/updateBook.controller";
import { prisma } from "../lib/prisma";


export async function addBook(data:TAddBookSchema){
const foundData= await prisma.books.findFirst({
  where:{
    title:data.title,
  }
});
if(foundData){
throw new Error(`title with ${data.title} already exists`);
};

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

export async function updateBooks(id:number,data:TUpdateBookSchema){

 const foundData=  await getBookById(id);  

  const book =await prisma.books.update({
    where:{
      book_id:id
    },
    data:{
      title:data.title||foundData.title,
    description:data.description||foundData.description,
    author:data.author||foundData.author,
    genre:data.genre||foundData.genre,
    price:data.price||foundData.price,
    }
})
 
  return book;
};

export async function deleteBooks(id:number){

  await getBookById(id);  

const book=await prisma.books.delete({
  where:{
    book_id:id
  }
})
return book;

};

export async function getAllBooks(query:TBookQuerySchema ){
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

export async function getBookById(id:number){
const book =await prisma.books.findUnique({
  where:{
    book_id:id
  }
});

if(!book){
  throw new Error(`Book with id ${id} not found`);
};
    return book;
};