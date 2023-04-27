import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx'
import SearchList from '../SearchList/SeachList.jsx';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchBar />
      <SearchList />
    </div>
    
  );
}

export default App;
