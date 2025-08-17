import axios from "axios";
const api_key = import.meta.env.VITE_WEATHER_KEY
const base_url = 'https://api.openweathermap.org/data/2.5/weather'

const getCityWeather = (city) => {
  const request = axios.get(`${base_url}?q=${city}&appid=${api_key}`)
  return request.then(response => response.data)
}

export default {
  getCityWeather
}