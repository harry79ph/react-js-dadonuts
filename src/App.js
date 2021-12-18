import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from "./theme/GlobalStyle";
import Hero from "./components/Hero";
import Products from './components/Products';
import Lower from './components/Lower';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products />
      <Lower />
      <Footer />
    </Router>
  );
}

export default App;
