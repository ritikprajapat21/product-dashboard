import "./App.css";
import BarChart from "./components/custom/BarChart";
import Header from "./components/custom/Header";
import PieChart from "./components/custom/PieChart";
import Stats from "./components/custom/Stats";
import TransactionTable from "./components/custom/TransactionTable";

function App() {
  return (
    <>
      <Header />
      <div className="m-2">
        <TransactionTable />
      </div>
      <div className="mt-6 sm:w-1/2 mx-auto">
        <Stats />
      </div>
      <div className="flex flex-col md:flex-row items-center mt-3">
        <BarChart />
        <PieChart />
      </div>
    </>
  );
}

export default App;
