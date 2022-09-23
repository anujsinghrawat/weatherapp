import "./App.css";
import Tempapp from "./components/Tempapp";
import React, { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("almora");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a6cbb38c0b717d146e22394a96a1f3f6`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      console.log(resJson);
      console.log(city.temp);
    };

    fetchApi();
  }, [search]);

  return (
    // <Tempapp/>
    <div className="box">
      <div className="inputData">
        <input
          className="inputField"
          type="search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      {!city? (
        <p className="errorMsg">No data found</p>
      ) : (
        <div>
          <div className="info">
            <h2 className="location">
              <i className="fa-solid fa-location-dot"></i> {search}
            </h2>
            {/* <h1 className="temp">50</h1> */}
            <h1 className="temp">{city.temp} °C</h1>

            <h3 className="tempmin_max">Min {city.temp_min} °C: max {city.temp_max} °C</h3>
          </div>
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
        </div>
      )}
    </div>
  );
}

export default App;
