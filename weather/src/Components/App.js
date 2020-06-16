import React, { useState } from 'react';
import '../Styles/App.css';



function App() {
   const [zipcode, setZipcode] = useState("");
   const [weather, setWeather] = useState([]);

  const API_KEY= process.env.REACT_APP_WEATHER_API_KEY;
  const hourly_url =  `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&unit=imperial&appid=${API_KEY}`;
  const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&unit=imperial&appid=${API_KEY}`;



  const search = (e) => {
    if (e.key === "Enter") {
      Promise.all([fetch(hourly_url), fetch(forecast_url)])
        .then(([resp1, resp2]) => {
          return Promise.all([resp1.json(), resp2.json()]);
        })
        .then(([data1, data2]) => {

        const hourly = {
          city: data1.name,
          country: data1.sys.country,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list,
        };
        setWeather([hourly, data2]
        )
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
    </div>
  )
}

export default App;
