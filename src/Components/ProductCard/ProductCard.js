import { useContext } from "react";
import CartContext from "../../store/cart-context";

import Card from "../UI/Card";
import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.productId,
      img: props.productImage,
      name: props.productName,
      price: props.productPrice,
      amount: 1,
    });
  };

  return (
    <Card>
      <div className={classes["product-cart"]}>
        <img
          className={classes["product-image"]}
          src={props.productImage}
          alt="product"
        />
        <p translate="no" className={classes["product-name"]}>
          {props.productName}
        </p>
        <p className={classes["text-only"]}>only</p>
        <p className={classes["product-price"]}>{`${props.productPrice.toFixed(
          2
        )}$`}</p>
        <button onClick={addToCartHandler} className={classes["add-to-cart"]}>
          Add To Cart
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;
