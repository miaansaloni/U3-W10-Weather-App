import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { ThermometerHalf } from "react-bootstrap-icons";

const CurrentWeather = ({ currentWeatherData }) => {
  const kelvinToCelsius = (tempKelvin) => {
    return tempKelvin - 273.15;
  };
  const temperatureCelsius = kelvinToCelsius(currentWeatherData.main.temp);
  const feelsLikeCelsius = kelvinToCelsius(currentWeatherData.main.feels_like);
  const tempMinCelsius = kelvinToCelsius(currentWeatherData.main.temp_min);
  const tempMaxCelsius = kelvinToCelsius(currentWeatherData.main.temp_max);
  return (
    <Container>
      <Row>
        <Col lg={12} className="mx-auto my-3 text-center">
          <div className="location-name">
            {currentWeatherData.name}, <span>{currentWeatherData.sys.country}</span>
          </div>
          <p className="weather-description">{currentWeatherData.weather[0].description}</p>

          <div className="d-flex justify-content-center align-items-baseline temperature-desc">
            <div>
              <img
                className="temperature-img"
                src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`}
                alt=""
              />
            </div>
            <span className="temperature">{temperatureCelsius.toFixed(1)}°C</span>
            <ThermometerHalf className="temperature-icon" />
          </div>

          <div className="d-flex align-items-baseline justify-content-center">
            <p>{tempMaxCelsius.toFixed(1)}°</p>
            <div className="temperature-bar"></div>
            <p>{tempMinCelsius.toFixed(1)}°</p>
          </div>

          <div className="d-flex justify-content-between">
            <div>
              {currentWeatherData.main.humidity}%<p>Humidity</p>
            </div>
            <div>
              {currentWeatherData.wind.speed} m/s
              <p>Wind Speed</p>
            </div>
            <div>
              {feelsLikeCelsius.toFixed(1)}°C
              <p>Perceived</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
