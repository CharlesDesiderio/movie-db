import React from 'react';
import SearchBar from './components/searchBar';
import MovieDetail from './components/movieDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style/app.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route exact path="/movie/" render={(props) => <MovieDetail {...props} key={props.id} title={props.title} />} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
