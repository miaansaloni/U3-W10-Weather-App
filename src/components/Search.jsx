import { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSearch = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      onSearch({ city, state, country });
    }
    setValidated(true);
  };

  return (
    <Row>
      <Col xs={12} md={6} lg={4} className="mx-auto my-3">
        <Form id="searchForm" className="mx-auto my-3" noValidate validated={validated} onSubmit={handleSearch}>
          <Form.Group>
            <InputGroup className="input my-2 ">
              <FormControl
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="input-background"
              />
              {/* <Form.Control.Feedback type="invalid">Please provide a city.</Form.Control.Feedback> */}
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <InputGroup className="input my-2 ">
              <FormControl
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                className="input-background"
              />
              {/* <Form.Control.Feedback type="invalid">Please provide a state.</Form.Control.Feedback> */}
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <InputGroup className="input my-2 ">
              <FormControl
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="input-background"
              />
              {/* <Form.Control.Feedback type="invalid">Please provide a country.</Form.Control.Feedback> */}
            </InputGroup>
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            {" "}
            <Button type="submit" className="SearchBTN">
              Search
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default Search;
