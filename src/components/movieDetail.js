import React from 'react';

class MovieDetail extends React.Component {
    //console.log(props);
    render() {
    return (
        <div>
        <h1>{this.props.location.state.title}</h1>
        <img alt="poster" src={'http://image.tmdb.org/t/p/w185' + this.props.location.state.imageUrl} />
        </div>
    )}
}

export default MovieDetail;