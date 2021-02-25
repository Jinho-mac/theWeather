import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { DailyInterface, WeatherInterface } from '../interfaces/weatherInterface';
import GeoService from '../service/geoSerivce';
import WeatherService from '../service/weatherService';
import TodayWeather from '../components/TodayWeather';
import Temperature from '../components/Temperature';
import Humidity from '../components/Humidity';
import Wind from '../components/Wind';
import Daily from '../components/Daily';
import styled from 'styled-components';
import Nation from '../components/Nation';
import Sun from '../components/Sun';
import FineDust from '../components/FineDust';
import LoadingDots from '../components/LoadingDots';

const Container = styled.div`
  display: flex;
  @media (max-width: 68.75rem) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  flex: 1 1 50%;
`;

const RightSide = styled.div`
  flex: 1 1 50%;
`;

const geo = new GeoService();
const weather = new WeatherService();

const Weather = () => {
  const city = String(useSelector(state => state));
  const specifiedCity = useRef<string>('');
  const latitude = useRef<number>(37);
  const longitude = useRef<number>(126);
  const [currentWeather, setCurrentWeather] = useState<WeatherInterface>(null!);
  const [hourlyWeather, setHourlyWeather] = useState<WeatherInterface[]>(null!);
  const [dailyWeather, setDailyWeather] = useState<DailyInterface[]>(null!);

  useEffect(() => {
    async function setData() {
      const { address, lat, lon } = await geo.getGeo(city);
      specifiedCity.current = address;
      latitude.current = lat;
      longitude.current = lon;
      const currentWeather = await weather.getCurrentWeather(lat, lon);
      setCurrentWeather(currentWeather);
      const hourlyWeather = await weather.getHourlyWeather(lat, lon);
      const _hourlyWeather = hourlyWeather.slice(0, 25);
      setHourlyWeather(_hourlyWeather);
      const dailyWeather = await weather.getDailyWeather(lat, lon);
      setDailyWeather(dailyWeather);
    }
    setData();

    return () => {
      setCurrentWeather(null!);
      setHourlyWeather(null!);
      setDailyWeather(null!);
    };
  }, [city]);

  return (
    <div>
      <Header />
        { !dailyWeather ? <LoadingDots/> : <Container>
            <LeftSide>
                <TodayWeather city={specifiedCity.current} {...currentWeather} />
                <Temperature hourlyWeather={hourlyWeather} />
                <Humidity hourlyWeather={hourlyWeather} />
                <Wind hourlyWeather={hourlyWeather} />
            </LeftSide>
            <RightSide>
              <Nation />
              <Daily dailyWeather={dailyWeather}/>
              <FineDust lat={latitude.current} lon={longitude.current}/>
              <Sun {...currentWeather} />
            </RightSide>
          </Container>
        }
    </div>
    
  );
};

export default Weather;