import { Router } from "express";
import TransactionModel from "../db/transactions.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const month = parseInt(req.query.month || 3);
    const page = parseInt(req.query.page) || 0;
    const quantity = parseInt(req.query.q) || 10;
    const search = req.query.s || "";

    console.log("search", search);
    const transactions = await TransactionModel.aggregate([
      {
        $addFields: {
          month: { $month: "$dateOfSale" },
        },
      },
      { $match: { month: month } },
      {
        $match: {
          $or: [
            { title: new RegExp(search) },
            { description: new RegExp(search) },
            { price: { $eq: parseFloat(search) } },
          ],
        },
      },
      { $skip: page * quantity },
      { $limit: quantity },
      {
        $project: {
          _id: 0,
          __v: 0,
        },
      },
    ]);

    res.status(200).json({ data: transactions });
  } catch (error) {
    console.error(error);
    res.status(504).json({ error: error.message });
  }
});

export default router;
