import React from 'react';
import { DailyInterface } from '../interfaces/weatherInterface';
import { getDate } from '../service/timestampToTime';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
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

const Item = styled.li`
  margin-bottom: 0.2rem;
`;

interface Props {
  dailyWeather: DailyInterface
}

const Day = ({ dailyWeather }: Props) => {
  const { dt, 
    temp: { 
      min, 
      max 
    }, 
    humidity, 
    weather
  } = dailyWeather;
  const { description, icon } = weather[0];
  const time = getDate(dt);
  const minTemp = `${min}°C`;
  const maxTemp = `${max}°C`;
  const _humidity = `${humidity}%`;
  
  return (
    <Wrapper>
      <ImgAndList>
        <ImgContainer>
          <Img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
        </ImgContainer>
        <ul>
          <Item>{time}</Item>
          <Item>날씨: {description}</Item>
          <Item>최저/최고 온도: {minTemp}/{maxTemp}</Item>
          <Item>습도: {_humidity}</Item>
        </ul>
      </ImgAndList>
    </Wrapper>
  );
};

export default Day;