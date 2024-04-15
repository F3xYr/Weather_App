import React from 'react'
import './ForecastCard.css'

const ForecastCard = ({forecastData}) => {

  if (!forecastData || !forecastData.list) {
    return (
      <div className='forecast'>
        <h2>Forecast not available</h2>
        <p>We're experiencing difficulties retrieving forecast data.</p>
      </div>
    );
  }


  return (
      <div className='forecast'>
        <h2>Forecast for: {forecastData.city.name}, {forecastData.city.country}</h2>
        <div className='forecast-list'>
          {forecastData.list.slice(0, 30).map((forecastItem, index) => (
            <div key={index} className='forecast-item'>
              <p>Date/Time: {forecastItem.dt_txt}</p>
              <img src={`http://openweathermap.org/img/wn/${forecastItem.weather[0].icon}.png`} alt="Errore nel caricamento dell'icona" />
              <p>Temperature: {Math.round(forecastItem.main.temp)} °C</p>
              <p>MIN: {Math.round(forecastItem.main.temp_min)} °C --- MAX: {Math.round(forecastItem.main.temp_max)} °C</p>
              <p>Wind: {Math.round((forecastItem.wind.speed) * 3.6)} Km/h</p>
              <p>Pressure: {forecastItem.main.pressure} hPa</p>
              <p>Humidity: {forecastItem.main.humidity} %</p>

            </div>
          ))}
        </div>
      </div>
  )
}

export default ForecastCard