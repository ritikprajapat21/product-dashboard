import express from "express";
import connect from "./db/index.js";
import statsRouter from "./router/stats.js";
import transactionRouter from "./router/transaction.js";
import chartRouter from "./router/chart.js"

const app = express();
const conn = connect();

app.use("/transactions", transactionRouter);
app.use("/stats", statsRouter);
app.use("/chart", chartRouter);

if (conn) {
  app.listen(3000, () => console.log("listening at port 3000"));
} else {
  console.log("From index, not connected to db");
}
