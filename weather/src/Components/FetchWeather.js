import React, { useState } from 'react';

const FetchWeather = ({ zipcode }) => {
  const [zip, setZip] = useState("");

  const country = "us";
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `api.openweathermap.org/data/2.5/forecast?zip=${zip},${country}&appid=${API_KEY}`;
    return(
        <form
          onSubmit={(event) =>  {
            event.preventDefault();
            zipcode(zip);
          }}
          >
            <input
              type="text"
              name="zipcode"
              placeholder="Enter zipcode"
              onChange={(event) => {
                setZip(event.target.value);
              }}
              zipcode={zip}
              ></input>
          </form>
    );
}

export default FetchWeather