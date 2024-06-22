import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuPortal } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import useData from "@/hooks/useData";

export default function DropDown() {
  const { month, setMonth } = useData();

  const months = [
    { id: 1, month: "January" },
    { id: 2, month: "February" },
    { id: 3, month: "March" },
    { id: 4, month: "April" },
    { id: 5, month: "May" },
    { id: 6, month: "June" },
    { id: 7, month: "July" },
    { id: 8, month: "August" },
    { id: 9, month: "September" },
    { id: 10, month: "October" },
    { id: 11, month: "November" },
    { id: 12, month: "December" },
  ];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="secondary">{months[month - 1].month}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent className="bg-secondary rounded mt-1 p-2">
            <DropdownMenuLabel>Select a month</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={month} onValueChange={setMonth}>
              {months.map((month) => (
                <DropdownMenuRadioItem
                  className="cursor-pointer"
                  value={month.id}
                  key={month.id}
                >
                  {month.month}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </>
  );
}
