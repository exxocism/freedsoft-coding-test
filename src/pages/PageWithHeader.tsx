import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import BlogImage from '../components/BlogImage';

const PageWithHeader = () => {
  return (
    <>
      <Header />
      <BlogImage />
      <Outlet />
    </>
  );
};

export default PageWithHeader;
