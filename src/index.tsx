import * as React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import './main.css';
import './main.scss';

ReactDOM.render( 
  <BrowserRouter>
  <App />
  </BrowserRouter>,
      document.getElementById("app"), 
    
  );