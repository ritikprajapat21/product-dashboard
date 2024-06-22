import useData from "@/hooks/useData";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Pagination = () => {
  const { page, setPage, quantity, setQuantity } = useData();

  const onPageChange = (e) => {
    if (e.target.value === "") {
      return setPage(1);
    }
    setPage(e.target.value);
  };

  const onQuantityChange = (e) => {
    if (e.target.value === "") {
      return setQuantity(10);
    }
    setQuantity(e.target.value);
  };

  return (
    <section className="m-4 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <label>Page:</label>
        <Input
          type="number"
          className="w-16"
          value={page}
          onChange={onPageChange}
        />
      </div>
      <div className="flex gap-4">
        <Button
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Prev
        </Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
      <div className="flex gap-4 items-center">
        <label>Quantity:</label>
        <Input
          type="number"
          className="w-16"
          value={quantity}
          onChange={onQuantityChange}
        />
      </div>
    </section>
  );
};

export default Pagination;
