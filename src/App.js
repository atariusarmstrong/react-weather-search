import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

class App extends Component {
  getWeather = async (e) => {
    e.preventDefault()
    const api_call = await fetch (`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data)
  }
  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather}/>
      </div>
    );
  }
}

export default App;
