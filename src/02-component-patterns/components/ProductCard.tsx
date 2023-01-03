import { ReactElement, createContext } from "react";
import { useProducts } from "../hooks/useProducts";
import styles from "../styles/style.module.css";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/interfaces";

export interface Props {
  products: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  products,
  children,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, incrementValue } = useProducts({
    onChange,
    products,
    value,
  });

  return (
    <Provider value={{ counter, incrementValue, products }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
