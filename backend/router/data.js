import { Router } from "express";

const router = Router();

router.get("/", async (_, res) => {
  try {
    const [stats, bar, pie] = await Promise.all([
      fetch("http://localhost:3000/stats"),
      fetch("http://localhost:3000/chart/bar"),
      fetch("http://localhost:3000/chart/pie"),
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
