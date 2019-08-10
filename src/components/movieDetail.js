import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import '../style/movieDetail.css'

class MovieDetail extends React.Component {
    
    state = {
        actorList: [],
        crew1: {
            name: '',
            job: ''
        },
        crew2: {
            name: '',
            job: ''
        },
        crew3: {
            name: '',
            job: ''
        }
    }
    
    componentDidMount() {
        let getUrl = 'https://api.themoviedb.org/3/movie/' + this.props.location.state.id + '/credits';
        let getApi = '?api_key=f78ec448fcd99f333c9145fd8c13eff0'; // Yeah, I know. 
        let fullRequest = getUrl + getApi;
        Axios.get(fullRequest).then(response => {

            let crew1Name = response.data.crew[0] ?  response.data.crew[0].name : '';
            let crew2Name = response.data.crew[1] ?  response.data.crew[1].name : '';
            let crew3Name = response.data.crew[2] ?  response.data.crew[2].name : '';
            let crew1Job = response.data.crew[0] ?  response.data.crew[0].job : '';
            let crew2Job = response.data.crew[1] ?  response.data.crew[1].job : '';
            let crew3Job = response.data.crew[2] ?  response.data.crew[2].job : '';



            this.setState({
                actorList: response.data.cast,
                crew1: {
                    name: crew1Name,
                    job: crew1Job
                },
                crew2: {
                    name: crew2Name,
                    job: crew2Job
                },
                crew3: {
                    name: crew3Name,
                    job: crew3Job
                }
            })
        })
    }

    render() {
        let backdropPath = 'url(http://image.tmdb.org/t/p/w1280/' + this.props.location.state.backdrop + ')';
        let yearSnip = this.props.location.state.year.slice(0, 4);
        return (
        <div>
        <div className="container" style={{ backgroundImage: backdropPath }}>
        <div className="movieDetail">
            <div className="homeButton"><Link className="visited" to="https://charlesdesiderio.github.io/movie-db/">Home</Link></div> 
            <div className="movieDetailTitle"><strong>{this.props.location.state.title}</strong><span className="year">({yearSnip})</span></div>
            <div className="movieDetailInfo">{this.props.location.state.imageUrl ? <img className="poster" alt="poster" src={'http://image.tmdb.org/t/p/w342' + this.props.location.state.imageUrl} /> : <span>No Photo</span> }
                <div className="featuredCrew">
                <p><strong>Overview</strong><br />{this.props.location.state.description}</p>
                {this.state.crew1.job ? <div><strong>{this.state.crew1.job}</strong><br />{this.state.crew1.name}</div> : <div></div> }
                {this.state.crew2.job ? <div><strong>{this.state.crew2.job}</strong><br />{this.state.crew2.name}</div> : <div></div> }
                {this.state.crew3.job ? <div><strong>{this.state.crew3.job}</strong><br />{this.state.crew3.name}</div> : <div></div> }
                </div>
            </div>
        </div>
        </div>
        <div className="actorList" >
            <div className="actorHeadline">Featured Cast</div>
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