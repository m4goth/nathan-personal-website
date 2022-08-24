import './App.css';
import './css/Footer.css'
import React from "react";
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
// import { Footer } from './components/Footer'

const App = () => {
// function App() {
  return (
    <div className="App">
      {/* barra */}
      <NavBar /> 
      {/* página home */}
      <Home />
      {/* rodapé */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
