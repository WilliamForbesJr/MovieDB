import  React, { Component } from 'react';

import Movie from './movie';
import './App.css';

class MoviesList extends Component {

	state = {
		movies: []
	}

	async componentDidMount() {
		try {
			const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=6d1b8f3df76149d16cf874de028f1419&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
			const movies = await result.json();
			this.setState({
				movies: movies.results,
			});
		} catch(e){
			console.log(e)
		}
	}
	render() {
		return (
      <div>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
		);
	}
}

export default MoviesList;