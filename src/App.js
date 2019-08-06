import React from 'react';
import SearchBar from './components/searchBar';
import MovieContainer from './components/movieContainer';


function App() {
  return (
    <div className="App">
      Hello? This is App.
      <SearchBar />
      <MovieContainer />
    </div>
  );
}

export default App;

/*

Three main components:

1) Search bar.
2) Container for list of movies.
3) Card for individual movie.

*/