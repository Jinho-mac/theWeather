import React from 'react';
import styled from 'styled-components';
import { WeatherInterface } from '../interfaces/weatherInterface';
import { convertTime } from '../service/timestampToTime';

const Wrapper = styled.div`
  padding: 1rem;
`;

const Container = styled.div`
  border: 0.1rem solid black;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.1rem gray;
  padding: 1rem;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.h2`
  margin-bottom: 0.5rem;
`;

const Sun = ({ sunrise, sunset }: WeatherInterface) => {
  const _sunrise = convertTime(sunrise);
  const _sunset = convertTime(sunset);

  return (
    <Wrapper>
      <Container>
        <Title>일출일몰</Title>
        <Description>🌅[일출] {_sunrise}</Description>
        <Description>🌇[일몰] {_sunset}</Description>
      </Container>
    </Wrapper>
  );
};

export default Sun;