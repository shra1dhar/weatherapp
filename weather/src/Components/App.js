import React from 'react';
import '../Styles/App.css';
import ZipcodeForm from './ZipcodeForm';

//require("dotenv").config();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: "" };

    this.getWeather = this.getWeather.bind(this);
  }

  getWeather = (zipcode) => {
    console.warn(zipcode);
  }

  render() {
    return (
      <div className="App">
        <ZipcodeForm getWeather={this.getWeather} />
      </div>
    );
  }
}


export default App;
