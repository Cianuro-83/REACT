import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style/index.scss';
import Start from './components/Start';


ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <Start />
  </React.StrictMode>,
);
