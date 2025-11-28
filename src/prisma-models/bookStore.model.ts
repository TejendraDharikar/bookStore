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
// export function updateBooks(bookId:number,body:Book){
//   const book = getBookById(bookId);
//   if(!book.data){
//     throw new Error("book not found");
//   };
//   const updatedBook = bookStore.map((book)=>{
//     if(book.id===bookId){
//       return{
//         ...book,
//         ...body
//       }
//     }else{
//         return book;
//       }
//   });
//   bookStore=updatedBook;
//   return updatedBook[book.indx];
// };

// export function deleteBooks(bookId:number){

// const book=getBookById(bookId);

// const foundedBook=bookStore.find(book=>book.id===bookId);

// if(book.indx===-1){
// throw new Error(`id ${bookId} not found`);
// };
// const deletedBookStore = bookStore.filter( book => book.id!==bookId );

// bookStore=deletedBookStore;

// return foundedBook;

// };

// export function getAllBooks(query:{auther?:string,genre?:string}){
// if(!query.auther && !query.genre){
//   return bookStore;
// };

// const filteredBook = bookStore.filter(book=>
// book.auther===query.auther && book.genre===query.genre);
// return filteredBook;
// };
// export function getBookById(bookId:number){
// const bookIndx= bookStore.findIndex(book=>book.id===bookId
//   );
//   if(bookIndx===-1){
//     throw new Error("book not found");
//     };

//     return{
//       indx:bookIndx,
//       data:bookStore[bookIndx]
//     };
// };