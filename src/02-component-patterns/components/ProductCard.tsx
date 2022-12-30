import styles from "../styles/style.module.css";
export const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src="./logo192.png" />
      <span className={styles.productDescription}> CoffeMug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus}>-</button>
        <div className={styles.countLabel}>0</div>
        <button className={styles.buttonAdd}>+</button>
      </div>
    </div>
  );
};
