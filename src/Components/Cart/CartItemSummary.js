import { Fragment, useContext } from "react";
import classes from "./CartItemSummary.module.css";
import CartContext from "../../store/cart-context";

const CartItemSummary = () => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.map((item) => {
    const addToCartHandler = () => {
      cartCtx.addItem({
        id: item.id,
        price: item.price,
        amount: 1,
      });
    };

    const removeItemFromCartHandler = () => {
      cartCtx.removeItem(item.id);
    };

    return (
      <Fragment key={item.id}>
        <div className={classes.container}>
          <img src={item.img} alt="resim" />
          <p className={classes["item-name"]}>{item.name}</p>
          <div className={classes["item-amount"]}>{item.amount}</div>
          <p className={classes["item-total-price"]}>{item.price.toFixed(2)}</p>
          <div className={classes.operations}>
            <button onClick={removeItemFromCartHandler}>-</button>

            <button onClick={addToCartHandler}>+</button>
          </div>
        </div>
      </Fragment>
    );
  });

  return cartItems;
};

export default CartItemSummary;
