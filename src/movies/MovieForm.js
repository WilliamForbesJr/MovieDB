import React, { Component } from 'react';


export default class NewMovie extends Component {
	state = {
		text: '',
	}

	render() {
		const { submitForm } = this.props;
		const { text } = this.state;
		return (
				<form data-testid="movie-form" onSubmit={() => submitForm({text})}>
					<label htmlFor="Text"> Text
						<input 
							type="text"
							id="Text"
							onChange={e => this.setState({text: e.target.value})}
						/>
					</label>
					<button>
						Submit
					</button>
				</form>
		)
	}
}