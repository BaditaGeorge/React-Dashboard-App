import React, { useEffect, useState } from "react";
import "./weather.scss";
import classNames from "classnames";
import { WiDayCloudy } from "weather-icons-react";

async function Forecast(setWeather) {
  const res = await fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=Iasi&appid=c335166f33673c4d89e84fdbde0f077c"
  );
  let data = await res.json();
  setWeather(
    data.list.map((x) => {
      return {
        date: x.dt_txt,
        deg: (x.main.temp_min + x.main.temp_max) / 2,
        main: x.weather[0].main,
      };
    })
  );
}

function Weather() {
  let [weather, setWeather] = useState([]);
  let [day, setDay] = useState("today");

  function threeHoursForecast(x, index) {
    return (
      <div className="weatherCard">
        <p className="weatherCardDeg">{Math.round(x.deg)}°</p>
        <p className="weatherCardHour">{(index * 3) % 24} AM</p>
      </div>
    );
  }

  function dailyForecast(weather) {
    let degrees = [];
    let index = 0;
    for (let i = 8; i < weather.length + 1; i+=8) {
      if (i % 8 === 0) {
        degrees.push(0);
        for (let j = i - 8; j < i; j++) {
          degrees[index] += weather[j].deg;
        }
        degrees[index] = degrees[index] / 8;
        index++;
      }
    }
    return degrees.map((deg,index) => (
      <div className="weatherCard">
        <p className="weatherCardDeg">{Math.round(deg)}°</p>
        <p className="weatherCardHour">{-4 + index} days</p>
      </div>
    ));
  }

  useEffect(async () => {
    await Forecast(setWeather);
  }, []);
  return (
    <>
      <div className="weatherUp">
        <div className="weatherUpLeft">
          <div className="weatherIcon">
            <WiDayCloudy size={200} color="#ffffff"></WiDayCloudy>
          </div>
        </div>
        <div className="weatherUpRight">
          <div className="weatherNav">
            <a
              className="navPar"
              onClick={(e) => {
                setDay("today");
              }}
            >
              Today
            </a>
            <a
              onClick={(e) => {
                setDay("tomorrow");
              }}
              className="navPar"
            >
              Tomorrow
            </a>
            <a
              onClick={(e) => {
                setDay("week");
              }}
              className="navPar"
            >
              Week
            </a>
          </div>
          <div className="weatherDeg">
            <p>76 °</p>
          </div>
        </div>
      </div>
      <div className="weatherDown">
        <div className="weatherHourly">
          {day === "today"
            ? weather
                .slice(0, 8)
                .map((x, index) => threeHoursForecast(x, index))
            : day === "tomorrow"
            ? weather
                .slice(8, 16)
                .map((x, index) => threeHoursForecast(x, index))
            : dailyForecast(weather)}
        </div>
      </div>
    </>
  );
}

export default Weather;
