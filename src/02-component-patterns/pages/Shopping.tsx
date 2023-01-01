import ProductCard from "../components";
const product = {
  id: 1,
  title: "pasaje",
  img: "./imga.jpeg",
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
        <ProductCard products={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard products={product}>
          <ProductCard.Image />
          <ProductCard.Title title="pasaje 2" />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
