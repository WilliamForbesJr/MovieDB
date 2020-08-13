import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import MoviesList from '../MoviesList';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
	cleanup();
});

console.error = jest.fn();

const movies = {
	results: [
		{
			id: 'hi',
			title: 'movie tiasdftle!',
			poster_path: 'asdffdasdsa',
		},
		{
			id: 'hi2',
			title: 'movie tiasdf98tle!',
			poster_path: 'asdffda4sdsa',
		},
		{
			id: 'hi3',
			title: 'movie tiasd2ftle!',
			poster_path: 'asdffdasd6sa',
		},
	]
}

const movie = movies.results[0];

test('<MoviesList />', async () => {
	fetch.mockResponseOnce(JSON.stringify(movies));

	const { getByTestId, queryByTestId, getAllByTestId } = render(
		<MemoryRouter>
			<MoviesList />
		</MemoryRouter>
	); 

	expect(getByTestId("loading")).toBeTruthy();
	
	await waitForElement(() => getAllByTestId("movie-link"));

	expect(queryByTestId("loading")).toBeFalsy();
	expect(getAllByTestId('movie-link')[0].getAttribute('href')).toBe(`/${movie.id}`);

	expect(getAllByTestId('movie-link').length).toBe(movies.results.length);
});
