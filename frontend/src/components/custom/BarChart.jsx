import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = ({ data, ...props }) => {
  const [labels, setLabels] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    if (data) {
      data.data.sort((a, b) => {
        const aMax = a.range.split("-")[1];
        const bMin = b.range.split("-")[0];

        return aMax - bMin;
      });

      const labels = data.data.map((t) => t.range);
      setLabels(labels);

      const count = data.data.map((t) => t.count);
      setCount(count);
    }
  }, [data]);
  return (
    <div className="relative lg:w-1/2 mx-auto my-8">
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "Number of items",
              data: count,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
        {...props}
      />
    </div>
  );
};

export default BarChart;
