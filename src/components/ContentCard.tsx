import React from 'react';
import styled from 'styled-components';

import { Album } from '../types';

const ContentCard = ({ cardData }: { cardData: Album }) => {
  if (!cardData) return null;

  const { id, userId, title } = cardData as Album;

  return (
    <Container>
      <img src="http://via.placeholder.com/220x160" alt={title} />
      <MetaData>
        <div>{title}</div>
        <div>{cardData['text'] || 'No content'}</div>
        <div>
          From&nbsp;<span>₩{cardData['price'] || 'N/A'}</span>
        </div>
      </MetaData>
    </Container>
  );
};

const Container = styled.div`
  height: 267px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 160fr 107fr;
  cursor: pointer;
`;

const MetaData = styled.div`
  padding: 8px 10px 6px 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 18fr 36fr 27fr;
  grid-row-gap: 6px;

  & :nth-of-type(1) {
    font-size: 12px;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
  }

  & :nth-of-type(2) {
    font-size: 14px;
    color: #4a4a4a;
    white-space: nowrap;
    overflow: hidden;
  }

  & :nth-of-type(3) {
    font-size: 14px;
    font-weight: 400;
    color: #eb1d25;

    & span {
      font-size: 18px;
      font-weight: bold;
      color: #eb1d25;
    }
  }
`;

export default ContentCard;
