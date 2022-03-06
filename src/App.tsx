import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import PageWithHeader from './pages/PageWithHeader';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Routes>
      <Route element={<PageWithHeader />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default App;
