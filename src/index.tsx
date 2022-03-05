import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './styles';
import App from './App';
import './index.css';

const container = document.getElementById('app');

// Initial render: Render an element to the root.
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  container
);
