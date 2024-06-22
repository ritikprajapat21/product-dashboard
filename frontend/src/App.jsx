import "./App.css";
import BarChart from "./components/custom/BarChart";
import PieChart from "./components/custom/PieChart";
import TransactionTable from "./components/custom/TransactionTable";

function App() {
  return (
    <>
      <h1 className="m-4 text-2xl font-bold">Transaction Dashboard</h1>
      <div className="m-2">
        <TransactionTable />
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-4">
        <BarChart />
        <PieChart />
      </div>
    </>
  );
}

export default App;
