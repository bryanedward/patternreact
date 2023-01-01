import "../styles/style-custom.css";
import { ButtonImage } from "../components/ButtonImage";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTtitle";
import ProductCard from "../components";
const product = {
  id: 1,
  title: "PASAJE DE PLAYA",
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
        <ProductCard products={product} style={{}}>
          <ProductCard.Image />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard
          products={product}
          className="bg-dark text-dark"
          style={{ backgroundColor: "black" }}
        >
          <ProductImage className="img-dark" />
          <ProductTitle title="ok" />
          <ButtonImage className="button-dark" />
        </ProductCard>
        <ProductCard products={product} style={{}}>
          <ProductCard.Image />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons style={{ justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};
