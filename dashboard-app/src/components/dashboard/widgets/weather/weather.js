import React, { useEffect } from "react";
import "./weather.scss";
import classNames from "classnames";
import { WiDayCloudy } from "weather-icons-react";

function Forecast() {
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=Iasi&units=metric&appid=c335166f33673c4d89e84fdbde0f077c"
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(
        data.list.map((x) => {
          return {
            date: x.dt_txt,
            min: x.main.temp_min,
            max: x.main.temp_max,
            main: x.weather[0].main,
          };
        })
      );
    });
}

function Weather() {
  useEffect(()=>{
    Forecast()
  },[]);
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
            <a className="navPar">Today</a>
            <a className="navPar">Tomorrow</a>
            <a className="navPar">Week</a>
          </div>
          <div className="weatherDeg">
            <p>76 °</p>
          </div>
        </div>
      </div>
      <div className="weatherDown">
        <div className="weatherHourly">
          <div className="weatherCard">
            <p className="weatherCardDeg">76°</p>
            <p className="weatherCardHour">3 AM</p>
          </div>
          <div className="weatherCard">
            <p className="weatherCardDeg">76°</p>
            <p className="weatherCardHour">6 AM</p>
          </div>
          <div className="weatherCard">
            <p className="weatherCardDeg">76°</p>
            <p className="weatherCardHour">6 AM</p>
          </div>
          <div className="weatherCard">
            <p className="weatherCardDeg">76°</p>
            <p className="weatherCardHour">6 AM</p>
          </div>
          <div className="weatherCard">
            <p className="weatherCardDeg">76°</p>
            <p className="weatherCardHour">6 AM</p>
          </div>
          <div className="weatherCard">
            <p className="weatherCardDeg">76°</p>
            <p className="weatherCardHour">6 AM</p>
          </div>
          <div className="weatherCard">
            <p className="weatherCardDeg">76°</p>
            <p className="weatherCardHour">6 AM</p>
          </div>
          <div className="weatherCard">
            <p className="weatherCardDeg">76°</p>
            <p className="weatherCardHour">6 AM</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
