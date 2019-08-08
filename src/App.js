import React from 'react';
import SearchBar from './components/searchBar';
import MovieDetail from './components/movieDetail';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

      </div>
      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route path="/movie/" render={(props) => <MovieDetail {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;