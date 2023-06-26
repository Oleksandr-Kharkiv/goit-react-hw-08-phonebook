import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-roter-dom'
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}                 /* для створення глобального State */>                                
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
 
 