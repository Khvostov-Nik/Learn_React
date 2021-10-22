import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/App';
import reportWebVitals from './reportWebVitals';
import state from './store/state'

ReactDOM.render(<App state={state}/>, document.getElementById('root'));


reportWebVitals();
