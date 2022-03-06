import React from 'react';
import styled from 'styled-components';

import DutyFree from '../assets/images/BlogImage.jpg';

const BlogImage = () => {
  return <ImageContainer src={DutyFree} alt="Duty Free" />;
};

const ImageContainer = styled.img`
  margin-top: 82px;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export default BlogImage;
