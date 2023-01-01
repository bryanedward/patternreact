import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/style.module.css";

export const ButtonImage = () => {
  const { incrementValue, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
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
