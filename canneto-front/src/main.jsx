import React from 'react';
import ReactDOM from 'react-dom/client';
// REDUX TOOLKIT
import { store } from './store/store';
import { Provider } from 'react-redux';
// BOOTSTRAP CSS+JSX
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// SASS CUSTOM STYlE
import './style/index.scss';
// ROTTE
import AppRouter from './router/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<AppRouter />
		</Provider>
	</React.StrictMode>
);
