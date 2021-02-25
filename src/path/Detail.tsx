import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';

const ImgContainer = styled.div`
  width: 35%;
  height: 30rem;
  position: relative;
  margin: 2rem auto;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MetaData = styled.div`
  padding: 0 5rem;
`;

const Title = styled.h1`
  text-align: center;
  color: black;
  margin-bottom: 0.5rem;
`;

interface DetailInterface { 
  description: string, 
  title: string, 
  url: string,
  urlToImage: string
}

const Detail = () => {
  const location = useLocation<DetailInterface>();
  const { description, title, url, urlToImage }: DetailInterface = location.state;
  
  return (
    <div>
      <Header />
      <div>
        <ImgContainer>
          <Img src={urlToImage} alt="thumbNail"/>
        </ImgContainer>
        <MetaData>
          <Title>{title}</Title>
          <p>{ description || '본문 없음' }</p>
          <p>Source: <a href={url}>{url}</a></p>
        </MetaData>
      </div>
    </div>
  );
};

export default Detail;