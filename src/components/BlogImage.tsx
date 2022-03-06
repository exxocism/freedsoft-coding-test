import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import DutyFree from '../assets/images/BlogImage.jpg';

const BlogImage = () => {
  const [src, setSrc] = useState<any>(DutyFree);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/product')) setSrc('http://via.placeholder.com/1960x400');
    else setSrc(DutyFree);
  }, [location]);

  return <ImageContainer src={src} alt="Duty Free" />;
};

const ImageContainer = styled.img`
  margin-top: 82px;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export default BlogImage;
