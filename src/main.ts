import express from "express";
import { bookRouters } from "./routers/bookStore.router";

interface Book{
  id:number;
  name:string;
  auther:string;
  genre:string;
};

let bookStore:Book[] = [];

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
res.json({
  message:"Grinding Backend!!!",
})
});

bookRouters(app);

app.listen(4000,()=>{
  console.log("listening on http://localhost:4000");
});