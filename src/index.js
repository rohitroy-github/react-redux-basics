import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Provider allows the entire application to use/ gives access to the ReduxStore
import { Provider } from 'react-redux';

//Importing store 
import { store } from './state/store'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
