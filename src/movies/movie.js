import  React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

export const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({movie}) => {
	if (!movie) return null;

	const id = movie.id.toString();
	return (
		<Link to={`/${id}`} data-testid="movie-link">
			<Overdrive id={`${movie.id}`}>
				<Poster 
					src={`${POSTER_PATH}${movie.poster_path}`}
					alt={movie.title}
					data-testid="movie-img"
				/>
			</Overdrive>
		</Link>
	);
}


Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
		poster_path: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
	}).isRequired,
};

export default Movie;

export const Poster = styled.img`
	box-shadow: 0 0 35px black;
`;