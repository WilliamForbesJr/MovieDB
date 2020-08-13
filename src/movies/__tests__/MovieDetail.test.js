import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import MovieDetail from '../MovieDetail';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
	cleanup();
	// console.error.mockClear();
});

const match = {
	params: {
		id: 'asdf'
	},
};

console.error = jest.fn();

const movie = {
	id: 'hi',
	title: 'movie title!',
}

test('<MovieDetail />', async () => {
	fetch.mockResponseOnce(JSON.stringify(movie));

	const { getByTestId } = render(<MovieDetail match={match} />); 

	await waitForElement(() => getByTestId("movie-title"));
	expect(getByTestId("movie-title").textContent).toBe(movie.title)
});
