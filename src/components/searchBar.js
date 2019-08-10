import React from 'react';
import Axios from 'axios';
import MovieContainer from './movieContainer';
import '../style/searchBar.css';

class SearchBar extends React.Component {
    state = {
        input: '',
        api: '?api_key=f78ec448fcd99f333c9145fd8c13eff0',
        searchResults: [],
    }

    async componentDidMount() {
        let latestFetch = 'https://api.themoviedb.org/3/trending/movie/week' + this.state.api;
        let latestMovies = await Axios.get(latestFetch)
        
        this.setState({
            searchResults: latestMovies.data.results
        })
    }

    renderResults = async () => {
        let getUrl = 'https://api.themoviedb.org/3/search/movie';
        let getQuery = '&query=' + this.state.input;
        let fullRequest = getUrl + this.state.api + getQuery;
        const response = await Axios.get(fullRequest);

        this.setState({
            searchResults: response.data.results
        })
    }

    handleChange = (props) => {
        this.setState({
            input: props.target.value
        })
        
        setTimeout(() => {
            this.renderResults();
        }, 1000);
    }

    render () {
        return (
            <div className="searchBarContainer">
                <h1>The Really Totally Great Movie Search</h1>
                <input placeholder="Movie Search" className="input" value={this.state.input} onChange={this.handleChange} />
                <div className="movieContainer">
                    <MovieContainer results={this.state.searchResults}/>
                </div>
            </div>)
    }
}

export default SearchBar;