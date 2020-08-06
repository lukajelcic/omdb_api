import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './utils/history';
import './App.css';

//Components
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <Router history={history}>
      <Navbar title="OMDB app" />
      <Home />
    </Router>
  );
}

export default App;
