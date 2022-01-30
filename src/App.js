import React, { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Grid from "./Layout/Grid";
import Cart from "./Components/Cart/Cart";
import ProductList from "./Products/ProductList";
import { ToastContainer } from "react-toastify";

function App() {
  const [isCartShown, setCartIsShown] = useState(false);
  return (
    <Fragment>
      <div className="App">
        <Navbar onShow={setCartIsShown} />
        <Grid>
          <ProductList></ProductList>
        </Grid>
        {isCartShown && <Cart onRemove={setCartIsShown} />}
      </div>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
