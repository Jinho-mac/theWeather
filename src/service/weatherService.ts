import axios from "axios";
import { DailyInterface, WeatherInterface } from "../interfaces/weatherInterface";

class WeatherService {
  async getWeather(lat: number, lon: number) {
    const response = await axios({
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/onecall',
      params: {
        appid: '4989b7b7a564c39d2fd7e03e1cc87ccf',
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