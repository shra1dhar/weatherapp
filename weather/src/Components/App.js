import React, { useState, useEffect} from 'react';
import '../Styles/App.css';
import CurrentWeather from './CurrentWeather';
import Header from './Header';



function App() {
   const [zipcode, setZipcode] = useState("");
   const [weather, setWeather] = useState([]);
   const [mainIcon, setMainIcon] = useState("");
   const [error, setError] = useState(false);

  const API_KEY= process.env.REACT_APP_WEATHER_API_KEY;
  const current_url =  `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${API_KEY}`;
  //
  

  const search = (e) => {
    setError(false);
    if (e.key === "Enter") {
      validateZipcode();
    try {
    fetch(current_url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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
          wind: data.wind.speed,
        };
        const main = current.main;
        setWeather(current);
        setZipcode("");
        setMainIcon(main);
      });
        } 
      catch(error) {
        setError(true);
        alert({error});
      }
    }
  };

    const validateZipcode = () => {
      let zip = {zipcode};
      const errorMessage = "Please enter a 5 digit zipcode."

      if (zip.zipcode.length !== 5 && typeof zip.zipcode !=='number') {
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


  return(
    <div className='App'>
      <Header />
      <div className='Search'>
        <input 
          type='text'
          className='search-bar'
          placeholder='Enter zipcode'
          onChange={ e => setZipcode(e.target.value)} 
          value={zipcode} 
          onKeyUp={search}
          />
      </div>
      <CurrentWeather weather={weather}/>
    </div>
  )
}

export default App;
