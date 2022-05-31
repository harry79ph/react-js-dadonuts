import React, { useEffect, useState } from "react";
import "./App.css";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import Theme from './theme/theme';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./Home";
import NotFound from "./components/NotFound";
import { connect } from "react-redux";
import { calcTotals } from './redux/actions/cart-actions';
import { titles } from "./data/titles";

const App = ({ cart, calcTotals }) => {

  const [animation, setAnimation] = useState('active');
  const location = useLocation();

  useEffect(() => { 
    document.title = titles[location.pathname] ?? 'Dadonuts';
  }, [location])

  useEffect(() => {
    setTimeout(() => {
      setAnimation('');
    }, 4000);
  }, []);

  useEffect(() => {
    calcTotals();
  }, [cart, calcTotals]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home/*" element={<Home animation={animation} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
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
