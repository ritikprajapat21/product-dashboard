import { Pie } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";

ChartJs.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const [labels, setLabels] = useState([]);
  const [count, setCount] = useState([]);
  const [bgColor, setBgColor] = useState([]);
  const [borderColor, setBorderColor] = useState([]);

  useEffect(() => {
    if (data) {
      const labels = data.data.map((t) => t.category);
      setLabels(labels);

      const count = data.data.map((t) => t.number);
      setCount(count);

      const backgroundColor = [];
      const borderColor = [];

      data.data.forEach((_element) => {
        const r = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);

        backgroundColor.push(`rgba(${r},${g},${b}, 0.8)`);
        borderColor.push(`rgba(${r},${g},${b},1)`);
      });

      setBgColor(backgroundColor);
      setBorderColor(borderColor);
    }
  }, [data]);

  if (!data) {
    return <p>No data</p>;
  }

  return (
    <div className="relative lg:w-1/2 mx-auto mt-4">
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              label: "Number of Items",
              data: count,
              backgroundColor: bgColor,
              borderColor: borderColor,
            },
          ],
        }}
      />
    </div>
  );
};

export default PieChart;
