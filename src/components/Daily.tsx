import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { DailyInterface } from '../interfaces/weatherInterface';
import Day from './Day';

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
  text-align: center;
`;

const SliderContainer = styled.div`
  width: 100%;
  padding: 0 7% 5%; 
  .slick-prev:before {
    opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
`;

interface Props {
  dailyWeather: DailyInterface[]
}

const Daily = ({ dailyWeather }: Props) => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Wrapper>
      <Container>
        <Title>주간 날씨</Title>
        <SliderContainer>
          <Slider {...settings}>
            {
              dailyWeather.map((item, key) => {
                return <Day key={key} dailyWeather={item} />
              })
            }
          </Slider>
        </SliderContainer>
      </Container>
    </Wrapper>
  );
};

export default Daily;
