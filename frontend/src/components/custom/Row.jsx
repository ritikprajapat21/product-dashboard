import { Check, X } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { TableCell, TableRow } from "../ui/table";

export default function Row({ data }) {
  return data.map((tr) => (
    <TableRow key={tr.id}>
      <TableCell>{tr.id}</TableCell>
      <TableCell>{tr.title}</TableCell>
      <TableCell>{tr.description}</TableCell>
      <TableCell>{tr.price}</TableCell>
      <TableCell className="capitalize">{tr.category}</TableCell>
      <TableCell>{tr.sold ? <Check /> : <X />}</TableCell>
      <TableCell>
        <img className="w-[100rem] lg:w-fit" src={tr.image} alt="image" />
      </TableCell>
    </TableRow>
  ));
}
