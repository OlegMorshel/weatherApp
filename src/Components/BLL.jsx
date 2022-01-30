import React from "react";
import App from "../App";
import './../css/bll.css';

const apiKey = "7183abb0ceb4c9afc4b4bc93bd26e4da";

class Bll extends React.Component {
  state = {
    city: null,
    temp: null,
    country: null,
    pressure: null,
    wind: null,
    cloudy: null,
    sunset: null,
    error: null,
  };

  getData = async (e) => {
    e.preventDefault();

    let city = e.target.elements.city.value;

    if (city) {
      const apiUrl = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=${apiKey}`
      );
      const data = await apiUrl.json();

      let sunset = data.sys.sunset;
      let date = new Date(sunset);
      let sunsetDate =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        city: data.name,
        temp: data.main.temp,
        country: data.sys.country,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        cloudy: data.clouds.all,
        sunset: sunsetDate,
        error: null,
      });
			
    }
  };
	
  render() {
    return (
			
      <div className="bll">
        <App
          getData={this.getData}
          city={this.state.city}
          temp={this.state.temp}
          country={this.state.country}
          pressure={this.state.pressure}
          wind={this.state.wind}
          cloudy={this.state.cloudy}
          sunset={this.state.sunset}
          error="Input city please..."
        />
      </div>
    );
  }
}
export default Bll;
