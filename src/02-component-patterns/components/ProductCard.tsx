import { createContext, ReactElement, useContext} from "react";
import { useProducts } from "../hooks/useProducts";
import styles from "../styles/style.module.css";

interface Props {
  products: Product;
}

interface Product {
  id: number;
  title: String;
  img?: String;
}


interface ProductContextProps {
  counter: number
   incrementValue: (value: number) => void
}


const ProductContext  = createContext({} as ProductContextProps)
const Provider = ProductContext


export const ProductTitle = ({ title } : {title : string}) => {
  return (
      <span className={styles.productDescription}>{title}</span>    
  )
}

export const ProductImage = ({img = ''}) => {
  return (
      <img className={styles.productImg} 
      src="./logo192.png" />    
  )
}

// interface PropsButton {
//   incrementValue: (value: number) => void;
//   counter: number
// }

export const ButtonImage = () => {
  
  const { incrementValue, counter} = useContext(ProductContext)
  
  return <div className={styles.buttonsContainer}>
        <button
          className={styles.buttonMinus}
          onClick={() => incrementValue(-1)}
        > - 
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => incrementValue(+1)}>
          +
        </button>
      </div>
}

export const ProductCard = ({ products }: Props) => {
  const { counter, incrementValue } = useProducts();
  return (
      <div className={styles.productCard}>
        <ProductImage/>
        <ProductTitle title='titulo' />
        <ButtonImage incrementValue={incrementValue} counter={counter}/>
      </div>
  );
};
