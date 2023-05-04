import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx'
import SearchList from '../SearchList/SeachList.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FavoriteList from '../FavoriteList/FavoriteList.jsx';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Giphy Search!</h1>
      </header>
      <Router>
        <Route exact path='/'>
          <SearchBar />
          <br />
          <br />
          <SearchList />
          <br />
        </Route>
        <Route exact path='/favorites'>
          <FavoriteList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
