import React, { useEffect, useState } from "react";
import "./App.css";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import Theme from './theme/theme';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./Home";
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
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home/*" element={<Home animation={animation} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
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
