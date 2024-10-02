import React, { useState, useEffect } from "react";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

const apiKey = "e085a7d1659e09c5228310aae9216ab5";

const Weather = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [fadeOut, setFadeOut] = useState(false); // Stato per il fade out

  // Simula il fade out dell'immagine dopo 1 secondo
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Dopo 1 secondo inizia il fade out
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const fetchWeatherData = async ({ city, state, country }) => {
    if (!city || !country) {
      setError("Please provide city and country");
    }
    try {
      //Fetch 1 tempo corrente
      const currentWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}`
      );
      if (!currentWeather.ok) {
        setError("City not found");
      }
      const currentData = await currentWeather.json();
      setCurrentWeatherData(currentData);

      // Fetch 2, tempo futuro
      const forecastWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},${country}&appid=${apiKey}`
      );
      if (!forecastWeather.ok) {
        setError("Forecast not available");
      }
      const forecastData = await forecastWeather.json();
      setForecastWeatherData(forecastData);
      setError(null);
    } catch (error) {
      console.error("Error", error);
      setError("Error fetching weather data");
    }
  };

  return (
    <div id="body">
      <div className={`loading-image ${fadeOut ? "fade-out" : ""}`}>
        <img
          src="https://cdn0.iconfinder.com/data/icons/pug/512/pug_dog_sticker_emoji_emoticon_rain_umbrella-512.png"
          alt="Loading"
        />
      </div>

      <div className="overlay">
        <Search onSearch={fetchWeatherData} />

        {currentWeatherData && <CurrentWeather currentWeatherData={currentWeatherData} />}

        {forecastWeatherData && <ForecastWeather forecastWeatherData={forecastWeatherData} />}
      </div>
    </div>
  );
};

export default Weather;
