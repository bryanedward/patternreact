import { Props as PropsButton } from "../components/ButtonImage";
import { Props as PropsCard } from "../components/ProductCard";
import { Props as PropsImage } from "../components/ProductImage";
import { Props as PropsTitle } from "../components/ProductTtitle";

export interface Product {
  id: number
  title: string;
  img: string;
}

export interface ProductContextProps {
  counter: number;
  incrementValue: (value: number) => void;
  products: Product;
}

export interface ProductsCardHOC {
  ({ products, children }: PropsCard): JSX.Element;
  Buttons: ( Props: PropsButton) => JSX.Element;
  Image: ( Props: PropsImage) => JSX.Element;
  Title: (Props: PropsTitle) => JSX.Element;
}


export interface onChangeArgs {
  product: Product
  counter: number
}