import React from 'react';
import '../Styles/CurrentWeather.css';


const CurrentWeather = ({weather}) => {
    return (
      <div>
        <div id="description">
          City: {weather.city}
          Current Condition: {weather.description}
          Current Temperature: {weather.temp} F
        </div>
        <div className="WeatherIcon" id="main-thunderstorm"></div>
        <div id="temperatures"></div>
        Highest Temperature: {weather.highestTemp} F Lowest Temperature
        {weather.lowestTemp} F
        <div id="air">
          Humidity: {weather.humidity} % Wind Speed: {weather.wind} mph
        </div>
      </div>
    );
}

export default CurrentWeather;