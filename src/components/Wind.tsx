import React from 'react';
import { WeatherInterface } from '../interfaces/weatherInterface';
import { getHours } from '../service/timestampToTime';
import CanvasJSReact from '../lib/canvasjs.react';
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

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface DataPoint {
  label: string;
  y: number;
}

interface Props {
  hourlyWeather: WeatherInterface[]
}

const Humidity = ({ hourlyWeather }: Props ) => {
  const options = {
    animationEnabled: true,	
    exportEnabled: true,
    axisY : {
      gridThickness: 0,
      interval: 0.4
    },
    toolTip: {
      shared: true
    },
    data: [{
      name: "풍속",
      type: "column",
      color: "#8DC8CF",
      dataPoints: [] as DataPoint[]
    }]
  };

  hourlyWeather?.forEach(item => {
    const time = getHours(item.dt);
    const wind_speed = item.wind_speed;
    options.data[0].dataPoints.push({ label: time, y: wind_speed });
  });

  return (
    <Wrapper>
      <Container>
        <h1>풍속(m/s)</h1>
        <CanvasJSChart options = {options} />      
      </Container>
    </Wrapper>
  );
};

export default Humidity;