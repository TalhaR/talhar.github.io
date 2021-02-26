import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Grid } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container style={{backgroundColor: '#1f2020', color: '#e5e0d8'}}>
        <Header/>
        <About />
        <Skills/>
        <Projects/>
      </Grid>
      
      <Footer/>
    </div>
  );
}

export default App;
