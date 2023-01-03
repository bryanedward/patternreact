import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/style.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ButtonImage = ({ className, style }: Props) => {
  const { incrementValue, counter } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => incrementValue(-1)}>
        {" "}
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => incrementValue(+1)}>
        +
      </button>
    </div>
  );
};
