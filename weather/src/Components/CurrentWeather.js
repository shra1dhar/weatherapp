import React from 'react';


const CurrentWeather = ({weather}) => {
    return(
        <div>
            {weather.country}
        </div>
    )
}

export default CurrentWeather;