import React from 'react';
import App from './App';
import CurrentWeather from './CurrentWeather';
import "../Styles/WeatherContainer.css";


const WeatherContainer = ({weather}) => {

  return (
      <div className="Container">
         <CurrentWeather weather={weather}/>
      </div>
  );
}

export default WeatherContainer;