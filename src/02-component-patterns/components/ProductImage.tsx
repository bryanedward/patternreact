import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/style.module.css";

export const ProductImage = ({ img = "" }) => {
  const { products } = useContext(ProductContext);
  let image: string;
  if (img) {
    image = img;
  } else {
    if (products.img) {
      image = products.img;
    } else {
      image = "";
    }
  }

  return <img className={styles.productImg} src={image} alt="" />;
};
