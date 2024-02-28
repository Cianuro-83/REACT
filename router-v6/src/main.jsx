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
//RTK QUERY
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { messageApi } from './api/messageApi';


ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <ApiProvider api={ messageApi }>
      <BrowserRouter>
        <PrincipalRouter />
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>,
);