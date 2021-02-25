import { CityInterface } from "../interfaces/cityInterface";
import GeoService from "./geoSerivce";
import WeatherService from "./weatherService";

const geoService = new GeoService();
const weatherService = new WeatherService();

const cities = ["서울", "인천", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "독도"];

export const getCitiesWeather = async () => {
  let result: CityInterface[] = [];
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const { lat, lon } = await geoService.getGeo(city);
    const currentWeather = await weatherService.getCurrentWeather(lat, lon);
    const { temp, weather } = currentWeather;
    const { icon } = weather[0];
    result.push({ city, temp, icon });
  }
  return result;
}

