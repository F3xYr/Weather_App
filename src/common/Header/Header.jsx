import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <h1>Weather App</h1>
                <nav>
                    <ul className='nav-menu'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/forecast">Forecast</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}


export default Header;