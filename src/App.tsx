import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import PageWithHeader from './pages/PageWithHeader';
import ProductPage from './pages/ProductPage';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Routes>
      <Route element={<PageWithHeader />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default App;
