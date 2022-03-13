import React, { useEffect, useState } from "react";
import "./App.css";
import GlobalStyle from "./theme/GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Main from "./Main";
import NotFound from "./components/NotFound";
import { connect } from "react-redux";
import { calcTotals } from './redux/actions/cart-actions';

const App = ({ cart, calcTotals }) => {

  const [animation, setAnimation] = useState('active');

  useEffect(() => {
    setTimeout(() => {
      setAnimation('');
    }, 4000);
  }, []);

  useEffect(() => {
    calcTotals();
  }, [cart, calcTotals]);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Main animation={animation} />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calcTotals: () => dispatch(calcTotals())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
