import  React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import logo from './logo.svg';
import './App.css';

import rootReducer from './rootReducer';

import MoviesList from './movies/MoviesList';
import MovieDetail from './movies/MovieDetail';
import Toggle from './toggle/toggle';

const middleware = [thunk];

const store = createStore(
	rootReducer,
	{},
	composeWithDevTools(applyMiddleware(...middleware)),
);

const App = () => (
	<Provider store={store}>
		<Router>
			<div className="App">
				<header className="App-header">
					<Link to="/">
						<img src={logo} className="App-logo" alt="logo" />
					</Link>
					<Toggle/>
				</header>
				<Switch>
					<Route exact path="/" component={MoviesList} />			
					<Route path="/:id" component={MovieDetail} />
				</Switch>
			</div>
		</Router>
	</Provider>
);

export default App;