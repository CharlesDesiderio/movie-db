import React from 'react';
import MovieCard from './movieCard';

class MovieContainer extends React.Component {
    render() {
        return <div>
            Movie Box
            <MovieCard />
        </div>
    }
}

export default MovieContainer;