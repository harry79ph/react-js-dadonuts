import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import { Bars, NavIcon } from "./components/styles/Navbar.styled";
import GlobalStyle from "./theme/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <NavIcon>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Router>
  );
}

export default App;
