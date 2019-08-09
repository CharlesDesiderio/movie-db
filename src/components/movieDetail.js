import React from 'react';
import Axios from 'axios';
import '../style/movieDetail.css'

class MovieDetail extends React.Component {
    
    state = {
        actorList: []
    }
    
    componentDidMount() {
        let getUrl = 'https://api.themoviedb.org/3/movie/' + this.props.location.state.id + '/credits';
        let getApi = '?api_key=f78ec448fcd99f333c9145fd8c13eff0'; // Yeah, I know. 
        let fullRequest = getUrl + getApi;
        Axios.get(fullRequest).then(response => {
            this.setState({
                actorList: response.data.cast
            })
        })
    }

    render() {
        let backdropPath = 'url(http://image.tmdb.org/t/p/w1280/' + this.props.location.state.backdrop + ')';
        console.log(backdropPath);
        return (
        <div>
        <div className="container" style={{ backgroundImage: backdropPath }}>
        <div className="movieDetail">{this.props.location.state.title}</div>
        <div>{this.props.location.state.imageUrl ? <img alt="poster" src={'http://image.tmdb.org/t/p/w185' + this.props.location.state.imageUrl} /> : <span>No Photo</span> }</div>
        <p>{this.props.location.state.description}</p>
        </div>
        <div className="actorList" >
         {this.state.actorList.map(x => {
            return (
                <div className="individual" key={x.credit_id + "div"} >
                    <div className="poster">
                        <div className="innerPoster">{x.profile_path ? <img alt={x.name} key={x.credit_id + "photo"} src={'http://image.tmdb.org/t/p/w185/' + x.profile_path} /> : <span className="posterSpan">No Photo</span>}</div>
                    </div>
                    <div className="info">
                        <div className="title" key={x.credit_id}>{x.name}</div><div>{x.character}</div>
                    </div>
                </div>
            )}
        )}
        </div>
        </div>
    )}
}

export default MovieDetail;