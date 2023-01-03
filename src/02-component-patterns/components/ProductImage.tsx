import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/style.module.css";

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className }: Props) => {
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

  return (
    <img className={`${styles.productImg} ${className}`} src={image} alt="" />
  );
};
