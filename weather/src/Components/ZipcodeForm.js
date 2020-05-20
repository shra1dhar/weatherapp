import React from 'react';

class ZipcodeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zipcode: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getWeather(this.state.zipcode);
  }

  handleChange(event) {
    this.setState({ zipcode: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          zipcode={this.state.value}
          onChange={this.handleChange}
        ></input>
        <input type="submit"></input>
      </form>
    );
  }
}

export default ZipcodeForm