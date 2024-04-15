import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import Home from './pages/Home/Home';
import Forecast from './pages/Forecast/Forecast';
import './App.css';

const App = () => {
  
  const [ city, setCity ] = useState('');
  
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Home city = {city} setCity = {setCity} />} />
              <Route path='/forecast' element={<Forecast city = {city} setCity = {setCity}/>}/>
            </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
