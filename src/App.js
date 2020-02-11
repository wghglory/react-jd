import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

import './utils/flexible.js';

import RouterConfig from './pages/RouteConfig';

function App() {
  return (
    <BrowserRouter>
      <RouterConfig></RouterConfig>
    </BrowserRouter>
  );
}

export default App;
