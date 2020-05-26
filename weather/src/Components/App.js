import React from 'react';
import '../Styles/App.css';
import ZipcodeForm from './ZipcodeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: [] }; 

    this.componentDidMount = this.componentDidMount.bind(this); //solution to fix this.setState. "this" was
  }

  componentDidMount(zipcode) {
     const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
     const country = "us";
     const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${country}&units=imperial&appid=${API_KEY}`;
     fetch(url)
       .then((response) => response.json())
       .then((data) => {
         this.setState({ weather: data });
       })
       .then(console.warn(this.state));
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
