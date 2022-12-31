import { ProductCard } from "../components/ProductCard";

const product = {
  id: 1,
  title: "coffee",
  img: "./logo192.png",
};

export const ShoppingPage = () => {
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
        <ProductCard products={product} />
      </div>
    </div>
  );
};
