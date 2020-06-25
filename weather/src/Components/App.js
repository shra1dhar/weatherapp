import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import Header from "./Header";
import CurrentWeather from './CurrentWeather';
import ErrorMessage from './ErrorMessage';



function App() {
   const [zipcode, setZipcode] = useState("");
   const [weather, setWeather] = useState([]);
   const [mainIcon, setMainIcon] = useState("");
   const [hasError, setHasError] = useState(false);

  const API_KEY= process.env.REACT_APP_WEATHER_API_KEY;
  const current_url =  `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${API_KEY}`;
  //
  
  

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(current_url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if(data.cod === "404") {
            setHasError(true);
            setZipcode("");
            setMainIcon("main");
          } else {
            setHasError(false);
          const current = {
            city: data.name,
            country: data.sys.country,
            description: data.weather[0].description,
            main: data.weather[0].main,
            temp: Math.round(data.main.temp),
            highestTemp: Math.round(data.main.temp_max),
            lowestTemp: Math.round(data.main.temp_min),
            clouds: data.clouds.all,
            humidity: data.main.humidity,
            wind: Math.round(data.wind.speed),
          };
          const main = current.main;
          setWeather(current);
          setZipcode("");
          setMainIcon(main);
          document.getElementById("container").style.visibility = "visible";
        }});
    }
  };

    const validateZipcode = (e) => {
      e.preventDefault();
      let zip = {zipcode};
      const errorMessage = "Please enter a 5 digit zipcode."
      if (zip.zipcode.length !== 5 && typeof zip.zipcode !=="number") {
        alert(errorMessage);
      }
    }

  
  //Using a pattern similar to componentDidMount. React monitors array values for change after the render cycle is complete.
  useEffect(() => {
    switch (mainIcon) {
      case "Thunderstorm":
        document.getElementById("main").setAttribute("icon", "main-thunderstorm");
        break;
      case "Drizzle":
        document.getElementById("main").setAttribute("icon", "main-drizzle");
        break;
      case "Rain":
        document.getElementById("main").setAttribute("icon","main-rain");
        break;
      case "Snow":
        document.getElementById("main").setAttribute("icon", "main-snow");
        break;
      case "Atmosphere":
        document.getElementById("main").setAttribute("icon", "main-atmosphere");
        break;
      case "Clear":
        document.getElementById("main").setAttribute("icon", "main-clear");
        break;
      case "Clouds":
        document.getElementById("main").setAttribute("icon", "main-clouds");
        break;
    }
  }, [mainIcon])  

 

  return (
    <div className="App">
      <Header />
      <div className="Search">
        <form onSubmit={validateZipcode}>
          <input
            type="text"
            className="search-bar"
            placeholder="Enter zipcode"
            onChange={(e) => setZipcode(e.target.value)}
            value={zipcode}
            onKeyUp={search}
          />
        </form>
      </div>
      <div>
        {hasError ? <ErrorMessage /> : <CurrentWeather weather={weather} error={hasError}/>}
      </div>
    </div>
  );
}

export default App;
