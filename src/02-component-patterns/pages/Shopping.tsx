import { useState } from "react";
import ProductCard from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/style-custom.css";
const product = {
  id: 1,
  title: "PASAJE DE PLAYA",
  img: "./imga.jpeg",
};

const product2 = {
  id: 2,
  title: "PASAJE DE MOIT",
  img: "./nintento.jpeg",
};

interface ProductInCart extends Product {
  counter: number;
}

const products: Product[] = [product, product2];

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    counter,
    product,
  }: {
    counter: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (counter === 0) {
        const { [product.id]: id, ...rest } = oldShoppingCart;
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, counter },
      };
    });
  };

  return (
    <div>
      <h1>Shopping</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((item, index) => (
          <ProductCard
            key={index}
            products={item}
            onChange={onProductCountChange}
          >
            <ProductCard.Image />
            <ProductCard.Title title={item.title} className="text-bold" />
            <ProductCard.Buttons style={{ justifyContent: "end" }} />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart-dark">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            value={product.counter}
            key={key}
            products={product}
            style={{ width: "100px" }}
          >
            <ProductCard.Image style={{ boxShadow: "10px 10px 10px red" }} />
            {/* <ProductCard.Title className="text-bold" /> */}
            <ProductCard.Buttons style={{ justifyContent: "end" }} />
          </ProductCard>
        ))}
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart)}</code>
      </div>
    </div>
  );
};
