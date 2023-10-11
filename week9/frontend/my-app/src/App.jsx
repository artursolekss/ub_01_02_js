import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const onSearch = () => {
    fetch("http://127.0.0.1:3800/get-weather-forecast?city=" + city, {
      method: "GET"
    }).then(function (resp_prom) {
      resp_prom.json().then(function (resp) {
        const data = resp.response;
        setWeather(data);
      })
    })
  }

  const onCityChange = (event) => {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <Container>
        <Form>
          <input type="search"
            placeholder="City"
            aria-label="Search"
            value={city}
            onChange={onCityChange}
          >
          </input>
          <button onClick={onSearch} className="btn btn-outline-success"
            type="button">
            Search
          </button>
        </Form>
        {weather !== null &&
          <>
            <div className="row">
              <div className="col-sm">
                Today
              </div>
              <div className="col-sm">
                {weather.forecast[0].date}
              </div>
              <div className="col-sm">
                {weather.forecast[1].date}
              </div>
              <div className="col-sm">
                {weather.forecast[2].date}
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <img src={"https://" + weather.current_temp.icon} alt="img"></img>
                {weather.current_temp.temp} °C
              </div>
              <div className="col-sm">
                <img src={"https://" + weather.forecast[0].icon} alt="img0"></img>
                {weather.forecast[0].avg_temp} °C
              </div>
              <div className="col-sm">
                <img src={"https://" + weather.forecast[1].icon} alt="img1"></img>
                {weather.forecast[1].avg_temp} °C
              </div>

              <div className="col-sm">
                <img src={"https://" + weather.forecast[2].icon} alt="img2"></img>
                {weather.forecast[2].avg_temp} °C
              </div>
            </div>
          </>
        }
      </Container >
    </div >
  );
}

export default App;
