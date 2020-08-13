import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import MovieForm from '../MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();
console.error = jest.fn();
test('<NewForm />', () => {
	const { queryByTestId, getByText, getByLabelText } = render(<MovieForm submitForm={onSubmit}/>);

	expect(queryByTestId('movie-form')).toBeTruthy();

	fireEvent.change(getByLabelText('Text'), {
		target: { value: 'hello'}
	});

	fireEvent.click(getByText('Submit'));

	expect(onSubmit).toHaveBeenCalledTimes(1);
	expect(onSubmit).toHaveBeenCalledWith({
		text: 'hello'
	});
});