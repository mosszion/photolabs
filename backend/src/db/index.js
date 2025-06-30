const dotenv = require("dotenv");
dotenv.config({ path: "./../.env" });

const pg = require("pg");

console.log(process.env.DATABASE_URL);
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});;

client
  .connect()
  .then(() => console.log("Connected to Postgres server"))
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
