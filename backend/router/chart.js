import Router from "express";
import TransactionModel from "../db/transactions.js";
const router = Router();

router.get("/bar", async (req, res) => {
  try {
    const month = parseInt(req.query.month || 3);

    const transactions = await TransactionModel.aggregate([
      {
        $addFields: {
          month: { $month: "$dateOfSale" },
          range: {
            $switch: {
              branches: [
                {
                  case: {
                    $lte: ["$price", 100],
                  },
                  then: "0-100",
                },
                {
                  case: {
                    $lte: ["$price", 200],
                  },
                  then: "101-200",
                },
                {
                  case: {
                    $lte: ["$price", 300],
                  },
                  then: "201-300",
                },
                {
                  case: {
                    $lte: ["$price", 400],
                  },
                  then: "301-400",
                },
                {
                  case: {
                    $lte: ["$price", 500],
                  },
                  then: "401-500",
                },
                {
                  case: {
                    $lte: ["$price", 600],
                  },
                  then: "501-600",
                },
                {
                  case: {
                    $lte: ["$price", 700],
                  },
                  then: "601-700",
                },
                {
                  case: {
                    $lte: ["$price", 800],
                  },
                  then: "701-800",
                },
                {
                  case: {
                    $lte: ["$price", 900],
                  },
                  then: "801-900",
                },
              ],
              default: "901-above",
            },
          },
        },
      },
      {
        $match: {
          month: month,
        },
      },
      {
        $group: {
          _id: "$range",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          range: "$_id",
          count: "$count",
        },
      },
    ]);

    res.status(200).json({ data: transactions });
  } catch (error) {
    res.status(504).json({ error: error.message });
  }
});

router.get("/pie", async (req, res) => {
  try {
    const month = parseInt(req.query.month || 3);
    const transactions = await TransactionModel.aggregate([
      {
        $addFields: {
          month: { $month: "$dateOfSale" },
        },
      },
      { $match: { month: month } },
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

    res.status(200).json({ data: transactions });
  } catch (error) {
    res.status(504).json({ error: error.message });
  }
});

export default router;
