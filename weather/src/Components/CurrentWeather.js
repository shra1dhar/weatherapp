import React, { useState, useEffect } from 'react';
import '../Styles/CurrentWeather.css';


const CurrentWeather = ({weather}) => {
  
    return (
      <div>
        <div id="container">
          <ul>
            <li></li>
            <div className="weather" id="description">
              <li>
                <h2>{weather.city}</h2>
              </li>
              <li> Current Temperature: {weather.temp} F </li>
              <li>Current Condition: {weather.description}</li>
              <div className="WeatherIcon" id="main">
                <li> {""} </li>
              </div>
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
      </div>
    );
}

export default CurrentWeather;