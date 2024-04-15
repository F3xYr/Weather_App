import React, { useState, useEffect } from 'react'
import './LocationInputForecast.css'

const LocationInputForecast = ({ city, setCity, fetchForecastData, setForecastData }) => {
    
    const [cacheData, setCacheData] = useState(null);

    const handleSearch = () => {
        if(cacheData && cacheData.city === city){
            setForecastData(cacheData.ForecastData);
        }
        else{
            fetchForecastData();
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    /*useEffect(() => {
        fetchForecastData();
    }, [city, fetchForecastData]);*/

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

export default LocationInputForecast;