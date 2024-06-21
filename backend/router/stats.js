import { Router } from "express";
import TransactionModel from "../db/transactions.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const month = parseInt(req.query.month || 3);

    const transactions = await TransactionModel.aggregate([
      {
        $addFields: {
          month: { $month: "$dateOfSale" },
        },
      },
      {
        $match: {
          month: month,
        },
      },
      {
        $group: {
          _id: "stats",
          totalSaleAmount: { $sum: { $cond: ["$sold", "$price", 0] } },
          noOfSold: { $sum: { $cond: ["$sold", 1, 0] } },
          noOfNotSold: { $sum: { $cond: ["$sold", 0, 1] } },
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
    ]);

    res.status(200).json({ data: transactions });
  } catch (error) {
    res.status(504).json({ error: error.message });
  }
});

export default router;
