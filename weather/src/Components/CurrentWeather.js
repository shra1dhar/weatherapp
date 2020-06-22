import React, { useState } from 'react';
import '../Styles/CurrentWeather.css';


const CurrentWeather = ({weather}) => {
  
    return (
      <div>
        <ul>
          <div className="weather" id="description">
            <li> City: {weather.city}</li>
            <li>Current Condition: {weather.description}</li>
            Current Temperature: {weather.temp} F <br />
          </div>
          <div className="WeatherIcon" id="main">
            <li> {""} </li>
            <br />
          </div>
          <div className="weather" id="temperatures">
            <li> Highest Temperature: {weather.highestTemp} F </li>
            <li> Lowest Temperature: {weather.lowestTemp} F </li>
          </div>
          <div className="weather" id="air">
            <li>Humidity: {weather.humidity} % </li>
            <li> Wind Speed: {weather.wind} mph </li>
          </div>
        </ul>
      </div>
    );
}

export default CurrentWeather;