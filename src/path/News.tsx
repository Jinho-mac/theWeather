import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import NewsItem from '../components/NewsItem';
import { NewsItemInterface } from '../interfaces/newsInterface';
import NewsService from '../service/newsService';
import styled from 'styled-components';
import LoadingDots from '../components/LoadingDots';

const NewsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const newsService = new NewsService();

const News = () => {
  const [newsList, setNewsList] = useState<NewsItemInterface[]>(null!);

  useEffect(() => {
    async function setData() {
      const gotten = await newsService.getNews();
      setNewsList(gotten);
    }
    setData();
  }, [newsList]);
  
  return (
    <div>
      <Header />
      <NewsList>
        {
          !newsList ? <LoadingDots /> : newsList.map((news, key) => {
            return <NewsItem key={key} id={key} {...news}/>
          })
        }
      </NewsList>
    </div>
  );
};

export default News;