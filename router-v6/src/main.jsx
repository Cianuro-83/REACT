import React from 'react';
import ReactDOM from 'react-dom/client';
// ROUTER
import { BrowserRouter } from 'react-router-dom';
// BOOTSTRAP CSS+JSX
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// SASS CUSTOM STYlE
import './style/index.scss';
// ROTTE
import PrincipalRouter from './routers/PrincipalRouter';



ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrincipalRouter />
    </BrowserRouter>
  </React.StrictMode>,
);