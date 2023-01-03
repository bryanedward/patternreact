import { useEffect, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductsArgs {
  onChange?: (args : onChangeArgs) => void
  products : Product
  value ?: number
}

export const useProducts = ({onChange, products, value = 0} : useProductsArgs) => {
  const [counter, setCounter] = useState(value);
  const incrementValue = (value: number) => {
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue);

    onChange && onChange({counter: newValue, product: products })
  };

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    incrementValue,
  };
};
