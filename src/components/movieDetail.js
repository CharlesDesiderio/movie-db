import React from 'react';
import Axios from 'axios';

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
        console.log(this.state.actorList);
    return (
        <div>
        <h1>{this.props.location.state.title}</h1>
        <img alt="poster" src={'http://image.tmdb.org/t/p/w185' + this.props.location.state.imageUrl} />
        <p>{this.props.location.state.description}</p>
         {this.state.actorList.map(x => 
            <div key={x.credit_id + "div"} >
                <h1 key={x.credit_id}>{x.name} as {x.character}</h1>
                <img alt={x.name} key={x.credit_id + "photo"} src={'http://image.tmdb.org/t/p/w185/' + x.profile_path} />
            </div>
            )}
        </div>
    )}
}

export default MovieDetail;