import './App.css';
import React from "react";
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette:{
    primary: {
      main: "#0E5B83"
    }
  }
})

const App = () => {
// function App() {
  return (
   
      <div className="App">
         <ThemeProvider theme={theme} >
          {/* barra */}
          <NavBar /> 
          {/* página home */}
          <Home />
          {/* rodapé */}
          <Footer />
        </ThemeProvider>
    </div>
    
  );
};

export default App;
