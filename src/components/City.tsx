import React from 'react';
import { CityInterface } from '../interfaces/cityInterface';
import styled from 'styled-components';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setCity } from '../service/citySlice';

const Wrapper = styled.div`
  flex: 1 1 25%;
  text-align: center;
  padding: 0.25rem 0.5rem;
`;

const Container = styled.div`
  background-color: #ECE9E6;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 7rem;
  position: relative;
  margin: auto;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const City = ({ city, temp, icon }: CityInterface) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const dispatch = useDispatch();
  const dispatchCity = (place: string) => dispatch(setCity(place));
  
  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const changed = city;
    dispatchCity(changed);
  };

  return (
    <Wrapper>
      <Container ref={containerRef} onClick={onClick}>
        <ImgContainer>
          <Img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
        </ImgContainer>
        <h2>{city}</h2>
        <h2>{`${temp}°C`}</h2>
      </Container>
    </Wrapper>

  );
};

export default City;