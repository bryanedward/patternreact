import { ProductsCardHOC } from "../interfaces/interfaces";
import { ButtonImage } from "./ButtonImage";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTtitle";

// export const ProductCard

 const ProductCard : ProductsCardHOC = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ButtonImage,
});

export default ProductCard