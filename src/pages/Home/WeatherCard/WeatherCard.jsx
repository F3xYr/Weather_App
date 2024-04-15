import React from 'react'
import './WeatherCard.css'

const WeatherCard = ({weatherData}) => {

  if (!weatherData || !weatherData.sys) {
    return (
      <div className='weather-card'>
        <h2>Weather not available</h2>
        <p>We're experiencing difficulties retrieving the weather data.</p>
      </div>
    );
  }

  
  return (
    <div className='weather-card'>
        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
        <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Errore nel caricamento dell'icona" />
        <p className='paragraph'>{weatherData.weather[0].main}</p>
        <p>Temperature: {Math.round(weatherData.main.temp)} °C</p>
        <p>MIN: {Math.round(weatherData.main.temp_min)} °C --- MAX: {Math.round(weatherData.main.temp_max)} °C</p>
        <p>Wind: {Math.round((weatherData.wind.speed) * 3.6)} Km/h</p>
        <p>Pressure: {weatherData.main.pressure} hPa</p>
        <p>Humidity: {weatherData.main.humidity} %</p>
        
    </div>
  )
}

export default WeatherCard