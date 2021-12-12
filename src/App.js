import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from "./theme/GlobalStyle";
import Hero from "./components/Hero";
import Products from './components/Products';
import {donutList} from './components/productLists'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Donuts' list={donutList}/>
    </Router>
  );
}

export default App;
