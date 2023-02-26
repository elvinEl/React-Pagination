import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DarkModeProvider from './Context';
import './tailwind.css'
import './i18n'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DarkModeProvider>
        <App />
    </DarkModeProvider>

);
