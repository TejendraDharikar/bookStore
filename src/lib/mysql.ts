import { createConnection } from "mysql2/promise";

export async function dbConnect(){
const mysqlDB = await createConnection({
  host:"localhost",
  user:"root",
  port:3307,
  password:"shero1234",
  database:"book_store"
});
return mysqlDB;
};

async function getAllDataBase(){
const db=await dbConnect();
const result = db.query(`
  SHOW DATABASES;
  `);
  return result;
}

getAllDataBase();
