import React, { useEffect, useState } from "react";
import "./App.css";
import GlobalStyle from "./theme/GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Main from "./Main";
import NotFound from "./components/NotFound";
import { connect } from "react-redux";

const App = ({ cart }) => {
  const [totals, setTotals] = useState({ quantity: 0, price: "" });

  useEffect(() => {
    setTotals({
      quantity: cart.reduce((acc, curr) => acc + Number(curr.qty), 0),
      price: cart
        .reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        .toFixed(2),
    });
  }, [cart]);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Main totals={totals} />} />
        <Route exact path="/cart" element={<Cart totals={totals} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(App);
