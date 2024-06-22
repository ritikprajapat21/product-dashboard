import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const month = parseInt(req.query.month) || 3;

    const [stats, bar, pie] = await Promise.all([
      fetch(`http://localhost:3000/stats?month=${month}`),
      fetch(`http://localhost:3000/chart/bar?month=${month}`),
      fetch(`http://localhost:3000/chart/pie?month=${month}`),
    ]);

    const statsData = await stats.json();
    const barData = await bar.json();
    const pieData = await pie.json();

    res.json({ stats: statsData, bar: barData, pie: pieData });
  } catch (error) {
    console.error(error);
    res.send(error.message);
  }
});

export default router;
