import React from 'react';
import { WeatherInterface } from '../interfaces/weatherInterface';
import { convertTime } from '../service/timestampToTime';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1rem solid black;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.1rem gray;
  padding: 1rem;
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const City = styled.h2`
  font-family: 'Nanum Pen Script', cursive;
  margin-bottom: 1rem;
`;

const ImgAndList = styled.div`
  width: 100%;  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 10rem;
  height: 10rem;
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
  display: flex;
  flex-direction: column;
`;

const Description = styled.h2`
  margin-bottom: 0.5rem;
`;

const Item = styled.li`
  margin-bottom: 0.2rem;
`;

interface Props extends WeatherInterface {
  city: string
}

const TodayWeather = ({ 
  city,
  dt,
  sunset,
  temp,
  humidity,
  uvi,
  weather }: Props) => {
  const { description, icon }: {description: string, icon: string} = weather[0];
  const _dt = convertTime(dt);
  const _sunset = convertTime(sunset);

  return (
    <Wrapper>
      <Container>
        <Title>오늘의 날씨</Title>
        <City>{city}</City>
        <ImgAndList>
          <ImgContainer>
            <Img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
          </ImgContainer>
          <MetaData>
            <Description>{description} | {`${temp}°C`}</Description>
            <ul>
              <Item>현재 시간: {_dt}</Item>
              <Item>일몰 시간: {_sunset}</Item>
              <Item>습도: {humidity}%</Item>
              <Item>자외선 지수: {uvi}</Item>
            </ul>
          </MetaData>
        </ImgAndList>
      </Container>
    </Wrapper>
  );
};

export default TodayWeather;