import React from "react";
import "./App.css"
import GlobalStyle from "./theme/GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from "./components/Cart";
import Main from "./Main";
import NotFound from "./components/NotFound";

const App = () => {

    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route exact path="/" element={<Main />}/>
                <Route exact path="/cart" element={<Cart />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    );
}
 
export default App;