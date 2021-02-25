import axios from "axios"

export const getFineDust = async (lat: number, lng: number) => {
  const response = await axios({
    method: 'GET',
    url: `https://api.waqi.info/feed/geo:${lat};${lng}/`,
    params: {
      token: 'ad65a6546f163d72a964d7c57f28cc51495cf7ec'
    }
  });
  const data = response.data.data;
  return data;
}