import React from "react";
import "./App.css"
import GlobalStyle from "./theme/GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from "./components/Cart";
import Main from "./Main";

const App = () => {

    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route exact path="/" element={<Main />}/>
            </Routes>
            <Routes>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </Router>
    );
}
 
export default App;