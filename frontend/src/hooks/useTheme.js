import { themeContext } from "@/context/theme";
import { useContext } from "react";

const useTheme = () => useContext(themeContext);

export default useTheme;
