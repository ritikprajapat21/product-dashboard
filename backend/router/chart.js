import Router from "express";
import TransactionModel from "../db/transactions.js";
const router = Router();

router.get("/bar", async (_req, res) => {
  try {
    const transactions = await TransactionModel.aggregate([
      {
        $bucket: {
          groupBy: "$price",
          boundaries: [0, 101, 201, 301, 401, 501, 601, 701, 801, 901],
          default: "901",
          output: {
            count: { $sum: 1 },
          },
        },
      },
    ]);

    res.status(200).send(transactions);
  } catch (error) {
    res.status(504).send(error.message);
  }
});

router.get("/pie", async (_req, res) => {
  try {
    const transactions = await TransactionModel.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $count: {} },
        },
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          number: "$count",
        },
      },
    ]);

    res.send(transactions);
  } catch (error) {
    res.sendStatus(504).send(error.message);
  }
});

export default router;
