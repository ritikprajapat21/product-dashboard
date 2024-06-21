import DropDown from "./DropDown";
import Search from "./Search";

export default function Header() {
  return (
    <>
      <div className="mb-2 flex justify-between mx-2">
        <Search />
        <DropDown />
      </div>
    </>
  );
}
