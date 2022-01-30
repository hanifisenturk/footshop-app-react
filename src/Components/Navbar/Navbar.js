import CartButton from "../Cart/CartButton";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <h1>FOOTSHOP</h1>
      <CartButton onShow={props.onShow} />
    </nav>
  );
};

export default Navbar;
