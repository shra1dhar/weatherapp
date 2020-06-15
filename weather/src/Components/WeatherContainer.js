import React from 'react';
import App from './App';
import fiveDayForecast from "./FiveDayForecast";

const WeatherContainer = (props) => {
  return (
      <div className="WeatherContainer">
          <fiveDayForecast forecast={props} />
      </div>
  );
}

export default WeatherContainer;