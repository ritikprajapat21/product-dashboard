import { createContext, useState, useEffect } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [month, setMonth] = useState(
    parseInt(localStorage.getItem("month")) || 3,
  );
  const [result, setResult] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(parseInt(localStorage.getItem("page")) || 1);
  const [quantity, setQuantity] = useState(
    parseInt(localStorage.getItem("quantity")) || 10,
  );
  const [search, setSearch] = useState(localStorage.getItem("search") || "");
  const baseUrl = "http://localhost:3000/";

  useEffect(() => {
    const fetchData = async () => {
      const otRes = await fetch(`${baseUrl}?month=${month}`);

      const otData = await otRes.json();
      console.log(otData);

      setResult(otData);
    };

    fetchData();
  }, [month]);

  useEffect(() => {
    localStorage.setItem("month", month);
    localStorage.setItem("page", page);
    localStorage.setItem("quantity", quantity);
    localStorage.setItem("search", search);

    const fetchData = async () => {
      const res = await fetch(
        `${baseUrl}transactions?month=${month}&page=${page}&q=${quantity}&s=${search}`,
      );

      const data = await res.json();

      setTransactions(data.data);
    };

    fetchData();
  }, [month, page, quantity, search]);

  return (
    <dataContext.Provider
      value={{
        month,
        setMonth,
        result,
        transactions,
        page,
        setPage,
        quantity,
        setQuantity,
        search,
        setSearch,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
