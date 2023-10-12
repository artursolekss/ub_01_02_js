import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import HeadColumn from './Components/HeadColumn';
import Column from './Components/Column';
import { AuthPage } from './Pages/Auth';

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const user = sessionStorage.getItem("user");

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
      {user !== null &&
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
                <HeadColumn>
                  Today
                </HeadColumn>
                {weather.forecast.map((forecast) => {
                  return (
                    <HeadColumn key={forecast.date}>
                      {forecast.date}
                    </HeadColumn>)
                })
                }
              </div>
              <div className="row">
                <Column temp={weather.current_temp.temp} icon={weather.current_temp.icon}>
                </Column>
                {weather.forecast.map((forecast) => {
                  return (
                    <Column key={forecast.date} temp={forecast.avg_temp} icon={forecast.icon}>
                    </Column>
                  )
                })}
              </div>
            </>
          }
        </Container >
      }
      {
        user === null &&
        <AuthPage></AuthPage>
      }
    </div >
  );
}

export default App;
