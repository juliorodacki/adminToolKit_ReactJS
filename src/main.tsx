import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {RegisterLayout} from './layouts/RegisterLayout';
import App from './App';
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
