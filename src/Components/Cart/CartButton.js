import { Fragment, useContext, useState, useEffect } from "react";
import classes from "./CartButton.module.css";
import CartSvg from "../../Assets/cart.svg";
import CartContext from "../../store/cart-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cartNotification = () =>
  toast.error("You have not selected a product yet!", {
    autoClose: 3000,
    theme: "colored",
    bodyClassName: classes["big-font"],
  });

const CartButton = (props) => {
  const [isBtnHighlighted, setIsBtnHiglighted] = useState(false);
  const ctx = useContext(CartContext);
  const itemsAmount = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const checkItemsInTheCart = () => {
    if (itemsAmount) {
      props.onShow(true);
    } else {
      cartNotification();
    }

    return;
  };

  useEffect(() => {
    if (ctx.items.length === 0) return;
    setIsBtnHiglighted(true);
    const animationTimeout = setTimeout(() => {
      setIsBtnHiglighted(false);
    }, 300);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [ctx.items]);

  return (
    <Fragment>
      <button
        onClick={checkItemsInTheCart}
        className={
          isBtnHighlighted
            ? `${classes.btn} ${classes["adding-animation"]}`
            : classes.btn
        }
      >
        <span>
          <img className={classes["cart-icon"]} src={CartSvg} alt="cart"></img>
        </span>
        <span className={classes.name}>Your Cart</span>
        <span className={classes.amount}>{itemsAmount}</span>
      </button>
    </Fragment>
  );
};

export default CartButton;
