import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
        const [weatherData, setWeatherData] = useState({ ready: false });
        const [city, setCity] = useState(props.defaultCity);
      
        function handleResponse(response) {
          setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
          });
        }
      
        function handleSubmit(event) {
          event.preventDefault();
          search();
        }
      
        function handleCityChange(event) {
          setCity(event.target.value);
        }
      
        function search() {
          const apiKey = "f3a4c7fd1572e38d1a0b0f724e0e0218";
          let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
          axios.get(apiUrl).then(handleResponse);
        }

    if (weatherData.ready) {
    return(
        <div className="Weather">  
            <form className="formSearch">
                <div className="row">
                    <div className="col-9 ">                    
                        <input
                            type="search"
                            placeholder="Enter a city.."            
                            className="search-field"
                        />
                    </div>

                    <div className="col-3">
                        <input type="Submit" value="search" className="search-button"/>
                    </div>
                </div>   
            </form>              
         


        </div>
    )
} else {
    search();
    return "Loading...";
  }
}