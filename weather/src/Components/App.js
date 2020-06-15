import React from 'react';
import '../Styles/App.css';
import ZipcodeForm from './ZipcodeForm';
import WeatherContainer from './WeatherContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hourly: [],
      fiveDay: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this); //solution to fix this.setState. No longer need to const that = "this".
  }

  componentDidMount(zipcode) {
    //const that = this; //need to cache reference to "this" (App object) for "this.setState" outside of callback to fetch request. 
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const country = "us";
    const urls = [
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&unit=imperial&appid=${API_KEY}`, //hourly
      `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${country}&units=imperial&appid=${API_KEY}`, // five day
    ];

 

    const requests = Promise.all(urls.map((url) => fetch(url)))
      .then(function(responses) {
        // Get a JSON object from each of the responses
        return responses.map(function(response) {
          return response.json();
        });
      }).then(data => {
        //Update App state with data from responses
       this.setState({hourly : data["0"], fiveDay: data["1"]});
       console.log(this.state.hourly);
          });
  }
 
  render() {
    return (
      <div className="App">
        <ZipcodeForm getZip={this.componentDidMount} />
        <WeatherContainer hourlyData={this.state.hourly} fiveDay={this.state.fiveDay}/>
      </div>
    );
  }
}


export default App;
