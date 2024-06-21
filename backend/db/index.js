import mongoose from "mongoose";

let conn;

export default async function connect() {
  console.log("Connecting to database");
  if (connect) console.log("Already connected to database");

  conn = mongoose.connect("mongodb://0.0.0.0:27017/mongodb", {
    authSource: "admin",
    user: "root",
    pass: "password",
  });

  if (!conn) console.log("Cannot connect to db");
  return conn;
}
