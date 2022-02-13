import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* StrictMode is running in the background that reports any issues found in development into the console */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

