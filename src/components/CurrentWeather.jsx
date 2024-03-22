import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
// import { Thermometer } from "react-bootstrap-icons";

const CurrentWeather = ({ currentWeatherData }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4} className="mx-auto my-3">
          <Card>
            <Card.Img
              variant="top"
              src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`}
              alt="Weather Icon"
              style={{ height: "50px", width: "50px" }}
            />
            <Card.Body>
              <Card.Title>
                Current Weather in {currentWeatherData.name}, {currentWeatherData.sys.country}
              </Card.Title>
              <Card.Text>
                <p>
                  Temperature:
                  {currentWeatherData.main.temp}°C
                </p>
                <p>Weather: {currentWeatherData.weather[0].description}</p>
                <p>Humidity: {currentWeatherData.main.humidity}%</p>
                <p>Wind Speed: {currentWeatherData.wind.speed} m/s</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
