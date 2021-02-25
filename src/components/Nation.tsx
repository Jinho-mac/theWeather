import React, { memo, useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { CityInterface } from '../interfaces/cityInterface';
import { getCitiesWeather } from '../service/citiesWeather';
import City from './City';
import LoadingSpin from './LoadingSpin';
import SearchBar from './SearchBar';

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

const Cities = styled.ul`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

const Nation = memo(() => {
  const [cities, setCities] = useState<CityInterface[]>(null!);

  useEffect(() => {
    async function setData() {
      const result = await getCitiesWeather();
      setCities(result);
    }
    setData();
  });

  return (
    <Wrapper>
      <Container>
        <Title>전국 날씨</Title>
        <SearchBar />
        <Cities>
          {
            !cities ? <LoadingSpin /> : cities.map((city, key) => {
              return <City key={key} {...city} />;
            })
          }
        </Cities>
      </Container>
    </Wrapper>
  );
});

export default Nation;