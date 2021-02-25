import React, { useEffect } from 'react';
import CanvasJSReact from '../lib/canvasjs.react';
import styled from 'styled-components';
import { getFineDust } from '../service/fineDust';
import { useState } from 'react';
import { FineDustInterface } from '../interfaces/fineDustInterface';

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

const FineDust = ({ lat, lon }: { lat: number, lon: number }) => {
  const [dust, setDust] = useState<FineDustInterface[]>(null!);
  
  useEffect(() => {
    async function setData() {
      const result = await getFineDust(lat, lon);
      const data: FineDustInterface[] = result.forecast.daily.pm10;
      const sliced = data.slice(0, 5);
      setDust(sliced);
    }
    setData();
  });
  
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    axisX: {
      interval: 1,
      valueFormatString:"#월 ##일"
    },
    axisY:{
      gridThickness: 0,
      includeZero: true
    },
    data: [{
      type: "scatter",
			markerSize: 30,
      xValueFormatString:"#월 ##일",
      dataPoints: [] as { x: number, y: number}[]
    }]
  };

  dust?.forEach(item => {
    const avg = item.avg;
    const day = item.day;
    const _day = parseInt(day.slice(6, 7) + day.slice(8, 10));
    options.data[0].dataPoints.push({ x: _day, y: avg});
  });

  return (
    <Wrapper>
      <Container>
        <h1>미세먼지(μm)</h1>
        <CanvasJSChart options = {options} />      
      </Container>
    </Wrapper>
  );
};

export default FineDust;
