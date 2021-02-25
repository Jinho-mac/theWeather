import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import Header from '../components/Header';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  background-color: white;
  width: 70%;
  height: 100%;
`;

const Text = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const ImgContainer = styled.div`
  width: 15rem;
  height: 15rem;
  position: relative;
  margin: 1rem auto;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  const history = useHistory();

  return (
    <Wrapper> 
      <Container>
        <Header />
        <Text>
          <Title>The Weather에 오신 것을 환영합니다.</Title>
          <div onSubmit={() => history.push('/weather')}>
            <SearchBar />
          </div>
        </Text>
        <ImgContainer>
          <Img src={'http://openweathermap.org/img/wn/02d@2x.png'} alt="thumbNail"/>
        </ImgContainer>
      </Container>
    </Wrapper>
  );
};

export default Home;