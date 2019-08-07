import React from 'react';
import Axios from 'axios';
import MovieContainer from './movieContainer';

class SearchBar extends React.Component {
    state = {
        input: '',
        searchResults: []
    }

    renderResults = async () => {
        let getUrl = 'https://api.themoviedb.org/3/search/movie';
        let getApi = '?api_key=f78ec448fcd99f333c9145fd8c13eff0'; // Yeah, I know. 
        let getQuery = '&query=' + this.state.input;
        let fullRequest = getUrl + getApi + getQuery;
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
        }, 500);
    }

    render () {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange} />
                <div>
                    <MovieContainer results={this.state.searchResults}/>
                </div>
            </div>)
    }
}

export default SearchBar;