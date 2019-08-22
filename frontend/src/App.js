import React from 'react';

import AppRouter      from './Router';
import { Provider }   from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { store }      from './redux/store/store';
import { initialize } from './services/bootstrap.service';

initialize();

function App() {
	return (
		<Provider store={store}>
			<AppRouter/>
		</Provider>
	);
}

export default App;
