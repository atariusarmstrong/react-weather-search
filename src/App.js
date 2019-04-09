import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

class App extends Component {
  state = {
    city: '',
    country: '',
    temperature: '',
    humidity: '',
    description: '',
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data)
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter city and country'
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather}/>
        <Weather 
          city = {this.state.city}
          country = {this.state.country}
          temperature = {this.state.temperature}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;
