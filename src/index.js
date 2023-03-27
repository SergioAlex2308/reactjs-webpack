import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './styles/global.scss';
import './styles/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
);

//ReactDOM.render(<App />, document.getElementById('app'));