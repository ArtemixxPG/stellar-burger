import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './componets/app/app';
import reportWebVitals from './reportWebVitals';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './services/reducers/root/root-reducer';
import thunk from 'redux-thunk';
import {configureStore} from "@reduxjs/toolkit";
import AppHeader from "./componets/app-header/app-header";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


const store = configureStore({reducer: rootReducer, middleware: [thunk], devTools: true});
root.render(
    <React.StrictMode>
        <BrowserRouter>
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
