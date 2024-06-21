import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Row from "./Row";
import { useEffect, useState } from "react";
import Header from "./Header";

function TransactionTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/transactions");
      const data = await res.json();
      console.log(data);
      setData(data.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Table>
        <TableCaption>A list of transactions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Sold</TableHead>
            <TableHead>Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length ? (
            <Row data={data} />
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                No transactions.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}

export default TransactionTable;
