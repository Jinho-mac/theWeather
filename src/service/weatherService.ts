import axios from "axios";
import { DailyInterface, WeatherInterface } from "../interfaces/weatherInterface";

class WeatherService {
  async getWeather(lat: number, lon: number) {
    const response = await axios({
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/onecall',
      params: {
        appid: '412711e32c9297128b2abf67390048d1',
        lat,
        lon,
        units: 'metric',
        lang: 'kr',
        exclude: 'minutely,alerts'
      }
    });
    const data = response.data;
    return data;
  }

  async getCurrentWeather(lat: number, lon: number) {
    const data = await this.getWeather(lat, lon)
    const result: WeatherInterface = data.current;
    return result;
  }

  async getHourlyWeather(lat: number, lon: number) {
    const data = await this.getWeather(lat, lon);
    const hourly: WeatherInterface[] = data.hourly;
    return hourly;
  }

  async getDailyWeather(lat: number, lon: number) {
    const data = await this.getWeather(lat, lon);
    const daily: DailyInterface[] = data.daily;
    return daily;
  }
}

export default WeatherService;