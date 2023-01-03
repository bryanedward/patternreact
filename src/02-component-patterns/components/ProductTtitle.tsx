import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/style.module.css";

export interface Props {
  className?: string;
  title?: string;
}

export const ProductTitle = ({ title = "", className }: Props) => {
  const { products } = useContext(ProductContext);
  return (
    <span className={`${styles.productDescription} ${className}`}>
      {title ? title : products.title}
    </span>
  );
};
