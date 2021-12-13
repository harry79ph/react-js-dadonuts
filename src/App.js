import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from "./theme/GlobalStyle";
import Hero from "./components/Hero";
import Products from './components/Products';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products />
    </Router>
  );
}

export default App;
