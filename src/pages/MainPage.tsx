import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import { Album } from '../types';
import useFetch from '../hooks/useFetch';
import ContentCard from '../components/ContentCard';

const MainPage = () => {
  const [albumData, setAlbumData] = useFetch('https://jsonplaceholder.typicode.com/albums');
  const [albumCount, setAlbumCount] = useState(5);

  const onInfiniteScroll = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || !albumData.length) return;
      if (albumCount >= albumData.length) {
        observer.unobserve(entry.target);
        return;
      }
      setAlbumCount((prevCount) => prevCount + 5);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onInfiniteScroll, { threshold: 1.0 });
    const target = document.querySelector('#scrollArea');
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [albumData]);

  return (
    <Container>
      <DescText>The hottest in the season</DescText>
      <SmallText>Hot sells in the season, for you to begin your journey</SmallText>
      <AlbumContainer>
        {albumData &&
          albumData.map(
            (album: Album, index: number) =>
              index < albumCount && <ContentCard key={String(album.id)} cardData={album} />
          )}
      </AlbumContainer>
      <InfinityScroll id="scrollArea">더 이상 컨텐츠가 없습니다.</InfinityScroll>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
`;

const DescText = styled.div`
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 1.5;
`;

const SmallText = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  color: #9b9b9b;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 20px;
  grid-column-gap: 25px;
`;

const InfinityScroll = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 50px;
  background-color: whitesmoke;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: gray;
`;

export default MainPage;
