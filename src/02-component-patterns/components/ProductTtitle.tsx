import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/style.module.css";

export const ProductTitle = ({ title }: { title?: string }) => {
  const { products } = useContext(ProductContext);
  return (
    <span className={styles.productDescription}>
      {title ? title : products.title}
    </span>
  );
};
