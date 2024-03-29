import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './componets/app/app';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './services/reducers/root/root-reducer';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);



root.render(
    <React.StrictMode>
        <BrowserRouter basename='/stellar-burger'>
        <Provider store={store}>
            <App/>
        </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your home, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
