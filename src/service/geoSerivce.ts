import axios from "axios";
import { GeoCode } from "../interfaces/geoInterface";

class GeoService {
  async getGeo(city: string) {
    const response = await axios({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json',
      params: {
        key: 'AIzaSyDYn61ppkG0v1QDFriM5_GytIFIOV1t0Jk',
        address: city  
      }
    });
    const results = response.data.results[0];
    const {
      formatted_address,
      geometry: {
        location: {
          lat,
          lng
        }
      }
    }: GeoCode = results;

    return {
      address: formatted_address,
      lat,
      lon: lng
    };
  };
}

export default GeoService;