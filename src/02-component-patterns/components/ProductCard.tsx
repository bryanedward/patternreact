import { createContext } from "react";
import { useProducts } from "../hooks/useProducts";
import styles from "../styles/style.module.css";
import { ProductContextProps, Props } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ products, children }: Props) => {
  const { counter, incrementValue } = useProducts();
  return (
    <Provider value={{ counter, incrementValue, products }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
