import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { NewsItemInterface } from '../interfaces/newsInterface';

const Wrapper = styled.li`
  flex: 1 1 30%;
  padding: 1rem;
  transition: transform 0.2s linear;
  &:hover {
    cursor: pointer;
    transform: translateY(-0.2rem);
  }
  @media (max-width: 50rem) {
    flex: 1 1 50%;
  }
`;

const ImgAndData = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.1rem solid black;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.1rem gray;
  padding: 1rem;
  width: 100%;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 20rem;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MetaData = styled.div`
  width: 100%;
  padding: 1rem;
`;

interface Props extends NewsItemInterface {
  id: number;
}

const NewsItem = ({ id, title, description, url, urlToImage, publishedAt }: Props ) => {  
  const history = useHistory();

  const onClick = () => {
    const _id = String(id);
    history.push(`/news/${_id}`, {
      title,
      description,
      url,
      urlToImage
    });
  }

  const date = publishedAt.slice(0, 10);
  const time = publishedAt.slice(11, 19);

  return (
      <Wrapper onClick={onClick}>
        <ImgAndData>
          <ImgContainer>
            <Img src={urlToImage} alt="thumbnail"/>
          </ImgContainer>
          <MetaData>
            <h2>{title}</h2>
            <span>{date} {time}</span>
          </MetaData>
        </ImgAndData>
      </Wrapper>
  );
};

export default NewsItem;