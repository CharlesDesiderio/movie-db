import React from 'react';
import Axios from 'axios';

class SearchBar extends React.Component {
    state = {
        input: 'matrix',
        searchResults: []
    }

    componentDidMount() {
        this.renderResults();
    }

    renderResults = () => {
        let getUrl = 'https://api.themoviedb.org/3/search/movie';
        let getApi = '?api_key=f78ec448fcd99f333c9145fd8c13eff0';
        let getQuery = '&query=' + this.state.input;
        let fullRequest = getUrl + getApi + getQuery;

        Axios
            .get(fullRequest)
            .then(data => 
               { this.setState({ searchResults: data.data.results });
                console.log(this.state.searchResults);}
                )

            .catch(err => {
                console.log(err);
                //return null;
            })
    }

    handleChange = (props) => {
        this.setState({
            input: props.target.value
        })
    }

    render () {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange} />
                <div>
                    {this.state.searchResults.map(x => <div><h1>{x.original_title}</h1><img alt="poster" src={'http://image.tmdb.org/t/p/w185' + x.poster_path} /></div>)}
                </div>
            </div>)
    }
}

export default SearchBar;