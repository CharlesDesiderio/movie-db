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

API RETURN TREE:
OBJ {
  page - num,
  results - array [object{id - num, logo_path - bool, name - string}],
  total_pages - num,
  total_results - num
}

EXAMPLE API REQUEST: 

https://api.themoviedb.org/3/search/company?api_key=f78ec448fcd99f333c9145fd8c13eff0&query=movie&page=1

EXAMPLE API RESPONSE:

{
  "page": 1,
  "results": [
    {
      "id": 117925,
      "logo_path": null,
      "name": "Movie"
    },
    {
      "id": 3068,
      "logo_path": null,
      "name": "Bess Movie"
    },
    {
      "id": 21973,
      "logo_path": null,
      "name": "Movie Pro"
    },
    {
      "id": 15738,
      "logo_path": null,
      "name": "SOL Movie"
    },
    {
      "id": 17221,
      "logo_path": null,
      "name": "movie extra"
    },
    {
      "id": 18511,
      "logo_path": null,
      "name": "Indostar Movie"
    },
    {
      "id": 18534,
      "logo_path": null,
      "name": "Movie Impact"
    },
    {
      "id": 18561,
      "logo_path": null,
      "name": "Magic Movie"
    },
    {
      "id": 18890,
      "logo_path": null,
      "name": "Movie Machine"
    },
    {
      "id": 15065,
      "logo_path": null,
      "name": "Movie Ventures"
    },
    {
      "id": 22746,
      "logo_path": null,
      "name": "Movie Prose"
    },
    {
      "id": 1941,
      "logo_path": null,
      "name": "Network Movie"
    },
    {
      "id": 3845,
      "logo_path": null,
      "name": "Gigantic Movie"
    },
    {
      "id": 4291,
      "logo_path": null,
      "name": "Movie%26Art"
    },
    {
      "id": 3500,
      "logo_path": null,
      "name": "Move Movie"
    },
    {
      "id": 7705,
      "logo_path": null,
      "name": "ITC Movie"
    },
    {
      "id": 13574,
      "logo_path": null,
      "name": "Movie World"
    },
    {
      "id": 12498,
      "logo_path": null,
      "name": "movie inc"
    },
    {
      "id": 11575,
      "logo_path": null,
      "name": "Movie Central"
    },
    {
      "id": 14555,
      "logo_path": null,
      "name": "Darkside Movie"
    }
  ],
  "total_pages": 42,
  "total_results": 832


}


*/

