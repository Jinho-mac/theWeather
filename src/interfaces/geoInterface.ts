export interface GeoCode {
  formatted_address: string,
  geometry: {
    location: {
      lat: number,
      lng: number
    } 
  }
}