import React from 'react';
import './App.css';
import { Router} from '@reach/router';
import Header from './components/Header'
import People from './components/People';
import Planet from './components/Planet';
import Search from './views/Search';
import NotFound from './components/NotFound';
import Starship from './components/Starship';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Router>
        <People path='people/:id' />
        <Planet path='planets/:id' />
        <Starship path="starships/:id" />
        <NotFound path='NotFound'/>
      </Router>
    </div>
  );
}

export default App;
