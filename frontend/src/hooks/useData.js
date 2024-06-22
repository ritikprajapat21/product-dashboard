import { dataContext } from "@/context/data";
import { useContext } from "react";

const useData = () => useContext(dataContext);

export default useData;
