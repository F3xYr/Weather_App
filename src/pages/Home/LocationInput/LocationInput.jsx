import React, { useState, useEffect } from 'react'
import './LocationInput.css'

const LocationInput = ({ city, setCity, fetchWeatherData, setWeatherData }) => {
    
    const [cacheData, setCacheData] = useState(null);

    const handleSearch = () => {
        if(cacheData && cacheData.city === city){
            setWeatherData(cacheData.ForecastData);
        }
        else{
            fetchWeatherData();
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    /*useEffect(() => {
        fetchWeatherData();
    }, [city, fetchWeatherData]);*/

    return (
        <div className='location-input'>
            <input 
                type="text"
                placeholder='Choose a city'
                value={city}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default LocationInput;