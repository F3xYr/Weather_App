import React, { useState } from 'react'
import LocationInputForecast from './LocationInputForecast/LocationInputForecast';
import ForecastCard from './ForecastCard/ForecastCard';

const Forecast = ({city, setCity}) => {

  
  const [ forecastData, setForecastData ] = useState(null);
  const API_KEY = '7aeb886da746edcef298397b92e9ae14'

  const fetchForecastData =  async () => {
    try {
          
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        setForecastData(data);
      } 
      catch (error) {
        console.error("Errore: ", error);
      }
    };

  return (
    <div className='container'>
        <LocationInputForecast 
            city = {city}
            setCity = {setCity}
            fetchForecastData = {fetchForecastData}
            setForecastData = {setForecastData}
        />
        {forecastData && <ForecastCard forecastData={forecastData} />}
    </div>
  )
}

export default Forecast