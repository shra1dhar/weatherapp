import React, { useState } from 'react';
import '../Styles/App.css';

const api = {
  API_KEY : process.env.REACT_APP_WEATHER_API_KEY,
  country : "us",
}

function App() {
  const [zipcode, setZipcode] = useState('');
  const [weather, setWeather] = useState({});

  

  return(
    <div className='App'>
      <div className='search'>
        <input 
          type='text'
          className='search-bar'
          placeholder='Enter zipcode'
          />
      </div>
    </div>
  )
}


export default App;
