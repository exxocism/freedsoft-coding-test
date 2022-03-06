import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/images/logo.png';

const Header = () => {
  const navigate = useNavigate();

  const onClickLogo = useCallback(() => {
    navigate('/');
  }, []);

  return (
    <ShadowLine>
      <HeaderFlexBox>
        <MainLogo src={logo} alt="TravelFlan Main Logo" onClick={onClickLogo} />
        <div style={{ flexGrow: 1 }} />
        <LoginButton>Login</LoginButton>
      </HeaderFlexBox>
    </ShadowLine>
  );
};

const ShadowLine = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 82px;
  background-color: #fff;
  padding: 0 30px;
  z-index: 100;
  box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
`;

const HeaderFlexBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const MainLogo = styled.img`
  width: 129px;
  object-fit: cover;
  margin-right: 30px;
  cursor: pointer;
`;

const LoginButton = styled.div`
  color: #666;
  font-weight: 600;
  margin-left: 30px;
  line-height: 60px;
  cursor: pointer;
  white-space: nowrap;
  font-size: 14px;
`;

export default Header;
