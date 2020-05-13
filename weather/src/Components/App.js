import React, { useState } from 'react';
import '../Styles/App.css';
import FetchWeather from './FetchWeather';

require("dotenv").config();

function App() {
  const [weather, setWeather] = useState("");

  return (
    <div className="App">
      <FetchWeather zipcode={(console.warn)}/>
    </div>
  );
}

export default App;
