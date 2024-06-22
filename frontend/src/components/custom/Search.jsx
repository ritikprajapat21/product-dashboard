import useData from "@/hooks/useData";
import { Input } from "../ui/input";

export default function Search() {
  const { search, setSearch } = useData();
  return (
    <Input
      placeholder="Search through transactions"
      className="w-1/3"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
