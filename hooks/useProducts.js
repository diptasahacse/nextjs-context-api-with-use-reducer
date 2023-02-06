import { useContext } from "react";
import { PRODUCT_CONTEXT } from "../provider/ProductProvider";

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
  };