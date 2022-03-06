import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import useFetch from '../hooks/useFetch';
import { Album } from '../types';

const ProductPage = () => {
  const [albums, setAlbums] = useFetch('https://jsonplaceholder.typicode.com/albums');
  const { id } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const target = albums?.find((album: Album) => album.id === Number(id));

  const openEditMode = useCallback(() => {
    setEditMode(true);
    setTitle(target.title);
    setContent(target.text);
  }, [target]);

  const closeEditMode = () => {
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    setEditMode(false);
    const newAlbums = albums.map((album: Album) => {
      if (album.id === Number(id)) {
        return { ...album, title, text: content };
      }
      return album;
    });
    setAlbums(newAlbums);
  };

  const titleHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const contentHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  if (!albums.length) return null;

  return (
    <Container>
      {editMode ? (
        <>
          <EditTitle onChange={titleHandler} value={title} placeholder="Input Title" />
          <EditDescription onChange={contentHandler} value={content} placeholder="Enter Text" />
          <EditButton onClick={closeEditMode}>Finish</EditButton>
        </>
      ) : (
        <>
          <TitleText>{target.title}</TitleText>
          <DescriptionText>{target['text'] || 'No Content'}</DescriptionText>
          <EditButton onClick={openEditMode}>Edit</EditButton>
        </>
      )}
    </Container>
  );
};

const EditTitle = styled.input`
  display: block;
  font-size: 32px;
  font-weight: 700;
  padding: 10px;
`;

const EditDescription = styled.textarea`
  margin-top: 30px;
  padding: 10px;
  color: #4a4a4a;
  line-height: 1.5;
  font-size: 14px;
  white-space: pre-wrap;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 15px auto;
`;

const TitleText = styled.div`
  font-size: 32px;
  font-weight: 700;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 15px;
`;

const DescriptionText = styled.div`
  padding: 0 15px 30px 15px;
  color: #4a4a4a;
  line-height: 1.5;
  font-size: 14px;
  white-space: pre-wrap;
  border-bottom: 1px solid #f2f2f2;

  &:before {
    content: 'What To Expect';
    display: block;
    margin-top: 30px;
    line-height: 50px;
    font-size: 32px;
    font-weight: 700;
    color: #606b78;
    margin-bottom: 20px;
  }
`;

const EditButton = styled.button`
  margin-top: 20px;
  display: block;
  padding: 0 12px;
  font-size: 14px;
  line-height: 34px;
  color: #fff;
  background: #ff5a60;
  border: none;
  outline: none;
  z-index: 10;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background: red;
  }
`;

export default ProductPage;
