import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "../Cart/Cart.module.css";
import CartItemSummary from "./CartItemSummary";
import CartContext from "../../store/cart-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const isItemInTheCart = cartCtx.items.length > 0;

  const modalRemoveHandler = () => {
    props.onRemove(false);
  };

  const orderCompletedNotification = () =>
    toast.success("Your order has been received!", {
      autoClose: 3000,
      theme: "colored",
      bodyClassName: classes["big-font"],
    });

  return (
    <Modal onRemove={props.onRemove}>
      <div className={classes.wrapper}>
        <div className={classes.over}>
          {isItemInTheCart && <CartItemSummary />}
          {!isItemInTheCart && (
            <p className={classes["no-product"]}>
              There is no product in your cart!
            </p>
          )}
        </div>

        <div className={classes["total-amount"]}>
          <p>Total Amount</p>
          <p>{cartCtx.totalAmount.toFixed(2)}$</p>
        </div>

        <div className={classes.buttons}>
          <button
            onClick={modalRemoveHandler}
            className={classes["button-cancel"]}
          >
            {isItemInTheCart ? "CANCEL" : "OKAY"}
          </button>
          {isItemInTheCart && (
            <button
              onClick={orderCompletedNotification}
              className={classes["button-order"]}
            >
              ORDER
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
