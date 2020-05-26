import React from 'react';
import '../Styles/App.css';
import ZipcodeForm from './ZipcodeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      weather: { hourly: "", fiveDay: ""}, }; 

    //this.componentDidMount = this.componentDidMount.bind(this); //solution to fix this.setState. "this" was
  }
/*
  componentDidMount(zipcode) {
     const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
     const country = "us";
     const fiveUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${country}&units=imperial&appid=${API_KEY}`;
     const hourlyUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&unit=imperial&appid=${API_KEY}`;
     fetch(hourlyUrl)
      .then((response => response.json()))
      .then(data => {
        this.setState({ weather: {hourly: data}});
      });
     fetch(fiveUrl)
       .then((response) => response.json())
       .then((returned) => {
         this.setState({ weather: { fiveDay: returned } });
       });
     }
*/
  
  render() {
    return (
      <div className="App">
        <ZipcodeForm getZip={this.componentDidMount} />
      </div>
    );
  }
}


export default App;
