import React from 'react';
import SearchBar from './components/searchBar';
import MovieDetail from './components/movieDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style/app.css';

function App() {
  return (
    <Router>
      <SearchBar />
      <div className="App">
      <Switch>
        <Route exact path="https://charlesdesiderio.github.io/movie-db/" component={SearchBar} />
        <Route path="https://charlesdesiderio.github.io/movie-db/movie/" render={(props) => <MovieDetail {...props} key={props.id} title={props.title} />} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
