import React from 'react';
import '../Styles/App.css';
import ZipcodeForm from './ZipcodeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hourly: [],
      fiveDay: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this); //solution to fix this.setState. "this" was
  }

  componentDidMount(zipcode) {
    const that = this; //need to cache reference to "this" (App object) for "this.setState" outside of callback to fetch request
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const country = "us";
    const urls = [
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&unit=imperial&appid=${API_KEY}`, //hourly
      `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${country}&units=imperial&appid=${API_KEY}`, // five day
    ];

    const requests = async () => {
      const fetchCalls = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&unit=imperial&appid=${API_KEY}`),
      fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${country}&units=imperial&appid=${API_KEY}`)])
      try {
        let responseJson = await fetchCalls.json();
      } catch (err) {
        alert(err)
      }
    }
/*
    const requests = Promise.all(urls.map((url) => fetch(url)))
      .then(function(responses) {
        // Get a JSON object from each of the responses
        return responses.map(function(response) {
          return response.json();
        });
      }).then(data => {
        //Update App state with data from responses
         console.log(data);
       //that.setState({hourly : data["0"], fiveDay: data["1"]});
          });
  */
  }

  render() {
    return (
      <div className="App">
        <ZipcodeForm getZip={this.componentDidMount} />
      </div>
    );
  }
}


export default App;
