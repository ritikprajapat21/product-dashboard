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
import Header from "./TableHeader";
import useData from "@/hooks/useData";
import Pagination from "./Pagination";

function TransactionTable() {
  const { transactions: data } = useData();

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
      <Pagination />
    </>
  );
}

export default TransactionTable;
