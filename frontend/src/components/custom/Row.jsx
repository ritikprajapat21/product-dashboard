import { TableCell, TableRow } from "../ui/table";

export default function Row({ data }) {
  console.log(data);
  return data.map((tr) => (
    <TableRow key={tr.id}>
      <TableCell>{tr.id}</TableCell>
      <TableCell>{tr.title}</TableCell>
      <TableCell>{tr.category}</TableCell>
      <TableCell>{tr.description}</TableCell>
      <TableCell>{tr.price}</TableCell>
      <TableCell>{tr.sold}</TableCell>
      <TableCell>
        <img className="w-[100rem] lg:w-fit" src={tr.image} alt="image" />
      </TableCell>
    </TableRow>
  ));
}
