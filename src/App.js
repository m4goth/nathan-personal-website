import React from "react";
import Home from './components/home/home';
import grade from './components/pages/pag-inicial';
import contatobutton from './components/contato-button';

function App() {
  return (
    <div className="App">
      <Home/>
      <grade/>
      <contatobutton/>
    </div>
  );
}

export default App;
