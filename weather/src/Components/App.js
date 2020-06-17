import React, { useState } from 'react';
import '../Styles/App.css';
import CurrentWeather from './CurrentWeather';



function App() {
   const [zipcode, setZipcode] = useState("");
   const [weather, setWeather] = useState([]);

  const API_KEY= process.env.REACT_APP_WEATHER_API_KEY;
  const current_url =  `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${API_KEY}`;

  const search = (e) => {
    if (e.key === "Enter") {
     fetch((current_url))
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {

        const current = {
          city: data.name,
          country: data.sys.country,
          description: data.weather[0].description,
          main: data.weather[0].main,
          temp: data.main.temp,
          highestTemp: data.main.temp_max,
          lowestTemp: data.main.temp_min,
          clouds: data.clouds.all,
          humidity: data.main.humidity,
          wind: data.wind.speed,
        };
        setWeather(current);
        setZipcode('');
      });
    };
  };
  
  return(
    <div className='App'>
      <div className='search'>
        <input 
          type='text'
          className='search-bar'
          placeholder='Enter zipcode'
          onChange={ e => setZipcode(e.target.value)} 
          value={zipcode} 
          onKeyPress={search} 
          />
      </div>
      <CurrentWeather weather={weather}/>
    </div>
  )
}

export default App;
