import { ReactElement } from "react";

export interface Props {
  products: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  title: string;
  img: string;
}

export interface ProductContextProps {
  counter: number;
  incrementValue: (value: number) => void;
  products: Product;
}

export interface ProductsCardHOC {
  ({ products, children }: Props): JSX.Element;
  Title: ({ title }: { title?: string | undefined }) => JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => JSX.Element;
  Buttons: () => JSX.Element;
}
