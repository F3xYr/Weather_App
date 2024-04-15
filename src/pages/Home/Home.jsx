import React, { useState } from 'react'
import LocationInput from './LocationInput/LocationInput';
import WeatherCard from './WeatherCard/WeatherCard';

const Home = ({city, setCity}) => {

  
  const [ weatherData, setWeatherData ] = useState(null);
  const API_KEY = '7aeb886da746edcef298397b92e9ae14'

  const fetchWeatherData =  async () => {
    try {
      
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeatherData(data);

    } catch (error) {
      console.error("Errore: ", error);
    }
  };

  return (
    <div className='container'>
        <LocationInput 
            city = {city}
            setCity = {setCity}
            fetchWeatherData = {fetchWeatherData}
            setWeatherData = {setWeatherData}
        />
        {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  )
}

export default Home