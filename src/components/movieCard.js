import React from 'react';
import '../style/movieCard.css';

class MovieCard extends React.Component {
    
    render() {
        let yearSnip = this.props.release.slice(0,4);
        
        return <div className="movieCard">
            <div className="poster">
                <div className="innerPoster">{this.props.imageUrl ? <img alt="poster" src={'http://image.tmdb.org/t/p/w185' + this.props.imageUrl} /> : <span className="posterSpan">No Photo</span>}</div>
            </div>
            <div className="info">
                <div className="title">{this.props.title}</div>
                <div>{yearSnip}</div>
            </div>
        </div>
    }
}

export default MovieCard;