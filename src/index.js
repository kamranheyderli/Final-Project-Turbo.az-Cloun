import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import main scss
import "./styles/main.scss";
// router dom
import { BrowserRouter } from 'react-router-dom';
// material tailwind
import { ThemeProvider } from "@material-tailwind/react";
// i18 n
import './i18n';

// react-redux
import { store } from './store/root/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>

);
