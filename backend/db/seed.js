import connect from "./index.js";
import transactions from "./transactions.js";

const conn = connect();

const fetchData = async () => {
  const res = await fetch(
    "https://s3.amazonaws.com/roxiler.com/product_transaction.json",
  );
  const data = await res.json();

  return data;
};

const initializeDb = async () => {
  const data = await fetchData();

  if (conn) {
    return transactions.insertMany(data);
  } else {
    throw Error("Not connected to database");
  }
};

initializeDb().then(() => {
  console.log("Data Inserted");
  process.exit();
});
