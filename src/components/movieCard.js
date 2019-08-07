import React from 'react';

class MovieCard extends React.Component {
    
    render() {
        let yearSnip = this.props.release.slice(0,4);
        
        return <div>
            <div className="poster">
                <img alt="poster" src={'http://image.tmdb.org/t/p/w185' + this.props.imageUrl} />
            </div>
            <div className="info">
                <h1>{this.props.title}</h1>
                <h2>{yearSnip}</h2>
                <p>{this.props.rating}</p>
            </div>
        </div>
    }
}

export default MovieCard;