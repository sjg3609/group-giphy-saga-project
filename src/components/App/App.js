import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx'
import SearchList from '../SearchList/SeachList.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FavoriteList from '../FavoriteList/FavoriteList.jsx';

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Router>
        <Route exact path='/'>
          <SearchBar />
          <SearchList />
        </Route>
        <Route exact path='/favorites'>
          <FavoriteList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
