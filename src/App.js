import React, {Component} from "react";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "e36ed364400282e43250b6c4c0274d44";
class App extends Component {
  
  state = {
    country: "",
    city: "",
    temperature: "",
    humidity: "",
    description: "",
    error: "",
  };
  
  gw = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`);
    const api_data = await api.json();
    if (city && country) {
      this.setState({
        country: api_data.sys.country,
        city: api_data.name,
        temperature: api_data.main.temp,
        humidity: api_data.main.humidity,
        description: api_data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        country: "",
        city: "",
        temperature: "",
        humidity: "",
        description: "",
        error: "Please enter correct inputs!",
      });
    }
  };
  
  render() {
    return (
      <div className="App">
      <div className="container">
          <Form gitWeather={this.gw}/>
          <Weather
            country= {this.state.country}
            city= {this.state.city}
            temperature= {this.state.temperature}
            humidity= {this.state.humidity}
            description= {this.state.description}
            error= {this.state.error}
          />
        </div>
      </div>
    );
  };
};

export default App;
