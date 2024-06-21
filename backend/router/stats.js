import { Router } from "express";
import TransactionModel from "../db/transactions.js";

const router = Router();

router.get("/stats", async (req, res) => {
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
          month: parseInt(month || 3),
        },
      },
      {
        $group: {
          _id: "stats",
          totalPrice: { $sum: "$price" },
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

    res.status(200).send(transactions);
  } catch (error) {
    res.status(504).send(error.message);
  }
});

export default router;
