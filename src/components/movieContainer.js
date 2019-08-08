import React from 'react';
import MovieCard from './movieCard';
import { Link } from 'react-router-dom';

class MovieContainer extends React.Component {
    render() {
        return <div>
            {this.props.results.map(x => <Link to={{pathname: `/movie/`, state: { title: x.original_title, imageUrl: x.poster_path, description: x.overview, id: x.id }}} ><MovieCard key={x.id} title={x.original_title} imageUrl={x.poster_path} rating={x.vote_average} release={x.release_date} /></Link>)}
        </div>
    }
}

export default MovieContainer;