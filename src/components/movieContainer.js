import React from 'react';
import MovieCard from './movieCard';
import { Link } from 'react-router-dom';
import '../style/movieContainer.css';

class MovieContainer extends React.Component {
    render() {
        return <div className="movieContainerContainer">
            {this.props.results.map(x => <Link to={{pathname: `/movie/`, state: { title: x.original_title, imageUrl: x.poster_path, description: x.overview, id: x.id, backdrop: x.backdrop_path, year: x.release_date }}} ><MovieCard key={x.id} title={x.original_title} imageUrl={x.poster_path} rating={x.vote_average} release={x.release_date} /></Link>)}
        </div>
    }
}

export default MovieContainer;