import React from "react";
import Form from "./Components/Form";
import Information from "./Components/Info";
import Weather from "./Components/Weather";
import "./css/App.css";
function App(props) {
  return (
    <div className="App">
      <Information />
      <Form getData={props.getData} />
      {props.city ? (
        <Weather
          city={props.city}
          temp={props.temp}
          country={props.country}
          pressure={props.pressure}
          wind={props.wind}
          cloudy={props.cloudy}
          sunset={props.sunset}
        />
      ) : (
        <div className="App__error">{props.error}</div>
      )}
    </div>
  );
}

export default App;
