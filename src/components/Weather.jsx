import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

const apiKey = "e085a7d1659e09c5228310aae9216ab5";

const Weather = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchParams = location.state;

    if (!searchParams) {
      navigate("/"); // Ritorna alla pagina di ricerca se non ci sono parametri
      return;
    }

    fetchWeatherData(searchParams);
  }, [location.state, navigate]);

  const fetchWeatherData = async ({ city, state, country }) => {
    try {
      const currentWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}`
      );

      if (!currentWeather.ok) {
        throw new Error("City not found");
      }

      const currentData = await currentWeather.json();
      setCurrentWeatherData(currentData);

      const forecastWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},${country}&appid=${apiKey}`
      );

      if (!forecastWeather.ok) {
        throw new Error("Forecast not available");
      }

      const forecastData = await forecastWeather.json();
      setForecastWeatherData(forecastData);
      setError(null);
    } catch (error) {
      setError("Error fetching weather data");
      console.error("Error", error);
    }
  };

  return (
    <div id="body">
      {error && <div className="error-message">{error}</div>}
      {currentWeatherData && <CurrentWeather currentWeatherData={currentWeatherData} />}
      {forecastWeatherData && <ForecastWeather forecastWeatherData={forecastWeatherData} />}
    </div>
  );
};

export default Weather;
