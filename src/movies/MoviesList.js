import  React, { PureComponent } from 'react';
import styled from 'styled-components';

import Movie from './movie';

import '../App.css';

class MoviesList extends PureComponent {

	state = {
		movies: []
	}

	async componentDidMount() {
		try {
			const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=6d1b8f3df76149d16cf874de028f1419&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
			const movies = await result.json();
			if (movies.results) {
				this.setState({
					movies: movies.results,
				});
			}
		} catch(e){
			console.log(e)
		}
	}
	render() {
		const { movies } = this.state;

		if (this.state.movies < 1) return <h1 data-testid="loading">Loading</h1>;

		return (
      <MovieGrid>
				{movies.map(movie => 
					<Movie 
						key={movie.id} 
						movie={movie} 
					/>
				)}
      </MovieGrid>
		);
	}
}

export default MoviesList;

const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(6, 1fr);
	grid-row-gap: 1rem;
`;