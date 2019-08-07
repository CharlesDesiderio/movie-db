import React from 'react';
import MovieCard from './movieCard';

class MovieContainer extends React.Component {
    render() {
        return <div>
            {this.props.results.map(x => <MovieCard key={x.id} title={x.original_title} imageUrl={x.poster_path} rating={x.vote_average} release={x.release_date} />)}
        </div>
    }
}

export default MovieContainer;