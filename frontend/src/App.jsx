import TransactionTable from "./components/custom/TransactionTable";
import "./App.css";
import BarChart from "./components/custom/BarChart";
import { useEffect, useState } from "react";
import PieChart from "./components/custom/PieChart";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/");
      const data = await res.json();

      setData(data);
    };

    getData();
  }, []);

  return (
    <>
      <TransactionTable />
      <BarChart data={data.bar} />
      <PieChart data={data.pie} />
    </>
  );
}

export default App;
