import Grid from '@material-ui/core/Grid';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Header/>
        <About />


      </Grid>
      
    </div>
  );
}

export default App;
