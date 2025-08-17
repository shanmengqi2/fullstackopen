import weatherService from '../services/weather'
import { useEffect, useState } from 'react'

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState({})
  useEffect(() => {
    weatherService.getCityWeather(city)
      .then(data => {
        setWeatherData(data)
        console.log(data)
      })
  }, [city])
  return (
    <div>
      <h1>Weather in {city}</h1>
      {weatherData.weather && (
        <>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)} Celsius</p>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </>
      )}
    </div>
  )
}

export default Weather