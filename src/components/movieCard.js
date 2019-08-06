import React from 'react';

class MovieCard extends React.Component {
    render() {
        return <div>
            <div className="poster">
                image here
            </div>
            <div className="info">
                <h1>Title</h1>
                <h2>Year</h2>
                <p>Rating</p>
            </div>
        </div>
    }
}

export default MovieCard;