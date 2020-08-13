import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Movie, { POSTER_PATH } from '../movie';

afterEach(() => {
	cleanup();
	console.error.mockClear();
});

console.error = jest.fn();

test('<Movie />', () => {
	render(<Movie />); 
	expect(console.error).toBeCalled();
});

const movie = {
	title: "movie title",
	id: "hi",
	poster_path: "asdf.jpg"
}

test('<Movie /> with Movie', () => {
	const { debug, getByTestId } = render(
		<MemoryRouter>
			<Movie movie={movie} />
		</MemoryRouter>
	);
	expect(console.error).not.toBeCalled();
	expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`);
	expect(getByTestId('movie-img').src).toBe(`${POSTER_PATH}${movie.poster_path}`);
	debug();
});