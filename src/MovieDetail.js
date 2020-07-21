import  React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

import { Poster } from './movie';

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
		const { backdrop_path, poster_path, title, release_date, overview } = this.state.movie

		const backdrop = `http://image.tmdb.org/t/p/w1280${backdrop_path}`;
		const poster = `http://image.tmdb.org/t/p/w154${poster_path}`;

		return (
      <MovieWrapper backdrop={backdrop}>
				<MovieInfo>
					<Poster src={poster} alt={title}/>
					<div>
						<h1>{title}</h1>
						<h3>{release_date}</h3>
						<p>{overview}</p>
					</div>
				</MovieInfo>
      </MovieWrapper>
		);
	}
}

export default MovieDetail; 

const MovieWrapper = styled.div`
	position: relative;
	padding-top: 50vh;
	background: url(${props => props.backdrop}) no-repeat;
	background-size: cover;
`;

const MovieInfo = styled.div`
	background: white;
	text-align: left;
	padding: 2rem 10%;
	display: flex;
	> div {
		margin-left: 20px;
	}
	img {
		position: relative;
		top: -5rem;
	}
`;