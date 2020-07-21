import  React, { Component } from 'react';

import './App.css';

class MovieDetail extends Component {

	state = {
		movie: {},
	}

	async componentDidMount() {
		try {
			const result = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=6d1b8f3df76149d16cf874de028f1419&language=en-US`);
			const movie = await result.json();
			this.setState({
				movie,
			});
		} catch(e){
			console.log(e)
		}
	}
	render() {
		const { backdrop_path, title, release_date, overview } = this.state.movie
		const POSTER_PATH = 'http://image.tmdb.org/t/p/w1280';
		return (
      <div>
				<img src={`${POSTER_PATH}${backdrop_path}`} alt={title}/>
        <h1>{title}</h1>
				<h3>{release_date}</h3>
				<p>{overview}</p>
      </div>
		);
	}
}

export default MovieDetail; 