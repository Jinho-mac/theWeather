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
  y: number;
  label: string;
}

interface Props {
  hourlyWeather: WeatherInterface[]
}

const Temperature = ({ hourlyWeather }: Props ) => {
  const options = {
    animationEnabled: true,	
    exportEnabled: true,
    axisY : {
      gridThickness: 0,
      interval: 3
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: "spline",
      name: "실제 기온",
      showInLegend: true,
      dataPoints: [] as DataPoint[]
    },
    {
      type: "spline",
      name: "체감 기온",
      showInLegend: true,
      dataPoints: [] as DataPoint[]
    }]
  };

  hourlyWeather?.forEach(item => {
    const time = getHours(item.dt);
    const realTemp = item.temp;
    const feelTemp = item.feels_like;
    options.data[0].dataPoints.push({ y: realTemp, label: time});
    options.data[1].dataPoints.push({ y: feelTemp, label: time});
  });

  return (
    <Wrapper>
      <Container>
        <h1>온도(°C)</h1>
        <CanvasJSChart options = {options} />      
      </Container>
    </Wrapper>
  );
};

export default Temperature;