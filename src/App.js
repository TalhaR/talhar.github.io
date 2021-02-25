import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import { Grid } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Header/>
        <About />
        <Skills/>

      </Grid>

      
    </div>
  );
}

export default App;
