/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    try {
			const result = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=6d1b8f3df76149d16cf874de028f1419&language=en-US`);

      const movie = await result.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    if (!movie.id) return null;

    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={`${movie.id.toString()}`}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h1 data-testid="movie-title">{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
	position: relative;
	padding-top: 65vh;
	background: url(${props => props.backdrop}) no-repeat;
	background-size: cover;
`;

const MovieInfo = styled.div`
	background: white;
	text-align: left;
	padding: 2rem 10%;
	display: flex;
	max-height: 25vh;
	> div {
		margin-left: 20px;
	}
	img {
		position: relative;
		top: -5rem;
	}
`;


// import  React, { PureComponent } from 'react';
// import styled from 'styled-components';
// import Overdrive from 'react-overdrive';

// import './App.css';

// import { Poster } from './movie';

// class MovieDetail extends PureComponent {

// 	state = {
// 		movie: {},
// 	}

// 	async componentDidMount() {
// 		try {
// 			const result = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=6d1b8f3df76149d16cf874de028f1419&language=en-US`);
// 			const movie = await result.json();
// 			this.setState({
// 				movie,
// 			});
// 		} catch(e){
// 			console.log(e)
// 		}
// 	}
// 	render() {
// 		const { backdrop_path, poster_path, title, release_date, overview, id } = this.state.movie
// 		const backdrop = `http://image.tmdb.org/t/p/w1280${backdrop_path}`;
// 		const poster = `http://image.tmdb.org/t/p/w154${poster_path}`;
		
// 		if(!id) return null;
// 		return (
//       <MovieWrapper backdrop={backdrop}>
// 				<MovieInfo>
// 					<Overdrive id={`${id}`}>
// 						<Poster src={poster} alt={title}/>
// 					</Overdrive>
// 					<div>
// 						<h1 data-testid="movie-title">{title}</h1>
// 						<h3>{release_date}</h3>
// 						<p>{overview}</p>
// 					</div>
// 				</MovieInfo>
//       </MovieWrapper>
// 		);
// 	}
// }

// export default MovieDetail; 

// const MovieWrapper = styled.div`
// 	position: relative;
// 	padding-top: 65vh;
// 	background: url(${props => props.backdrop}) no-repeat;
// 	background-size: cover;
// `;

// const MovieInfo = styled.div`
// 	background: white;
// 	text-align: left;
// 	padding: 2rem 10%;
// 	display: flex;
// 	max-height: 25vh;
// 	> div {
// 		margin-left: 20px;
// 	}
// 	img {
// 		position: relative;
// 		top: -5rem;
// 	}
// `;