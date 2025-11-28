import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import 'dotenv/config';
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaMariaDb({
   host:"localhost",
  user:"root",
  port:3307,
  password:"shero1234",
  database:"book_store",
  connectionLimit:3
})
export const prisma = new PrismaClient({
  adapter
});;