import React from 'react';
import App from './App';
import CurrentWeather from './CurrentWeather';


const WeatherContainer = ({weather}) => {

  return (
      <div className="Container">
         <CurrentWeather weather={weather}/>
      </div>
  );
}

export default WeatherContainer;