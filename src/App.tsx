import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import PageWithHeader from './pages/PageWithHeader';
import MainPage from './pages/MainPage';

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  font-size: 40px;
`;

const App = () => {
  return (
    <Container>
      <Routes>
        <Route element={<PageWithHeader />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
