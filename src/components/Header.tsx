import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <BlogName>TravelFlan Coding Assignment</BlogName>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  height: 45px;
  display: flex;
  top: 0;
  align-items: center;
  z-index: 999;
`;

const BlogName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: fixed;
  font-size: 1.4rem;
`;

export default Header;
