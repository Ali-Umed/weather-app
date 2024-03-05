import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloudSun,
  faCloud,
  faWind,
  faSmog,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

import {
  FaCloud,
  FaCloudRain,
  FaCloudSun,
  FaSmog,
  FaSnowflake,
  FaSun,
  FaWind,
} from "react-icons/fa";
// import {
//   WiDaySunny,
//   WiNightClear,
//   WiCloudy,
//   WiRain,
//   WiSnow,
//   WiFog,
//   WiWindy,
// } from "react-icons/wi";

export default function WeatherDayCard({ day }: { day: DayData }) {
  const {
    conditions,
    datetime,
    icon,
    tempmin,
    tempmax,
    visibility,
    sunset,
    sunrise,
    solarradiation,
    solarenergy,
    pressure,
    dew,
    cloudcover,
  } = day;

  // Function to convert Fahrenheit to Celsius
  const convertToFahrenheit = (temp: number) => {
    return Math.round((temp - 32) * 0.5555555555);
  };

  // Map weather conditions to corresponding icons
  //   const WeatherIcon = (icon: string) => {
  //     switch (icon) {
  //       case "cloudy":
  //         return <WiCloudy size={48} />;
  //       case "snow":
  //         return <WiSnow size={48} />;
  //       case "fog":
  //         return <WiFog size={48} />;
  //       case "rain":
  //         return <WiRain size={48} />;
  //       case "clear-day":
  //         return <WiDaySunny size={48} />;
  //       case "clear-night":
  //         return <WiNightClear size={48} />;
  //       case "wind":
  //         return <WiWindy size={48} />;
  //       default:
  //         return <WiDaySunny size={48} />;
  //     }
  //   };

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case "c01":
        return FaSun;
      case "c02":
        return FaCloudSun;
      case "c03":
      case "c04":
        return FaCloud;
      case "t01":
        return FaCloudRain;
      case "s01":
        return FaSnowflake;
      case "f01":
        return FaWind;
      case "a01":
        return FaSmog;
      default:
        return FaSun;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faSmog}
            className="w-12 h-12 mr-4 text-blue-500"
          />
          <div>
            <p className="text-lg font-semibold">{conditions}</p>
            <p className="text-sm">{datetime}</p>
          </div>
        </div>
        <div className="text-lg font-semibold">
          {convertToFahrenheit(tempmin)}°C - {convertToFahrenheit(tempmax)}°C
        </div>
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faChartLine}
            className="mr-2 text-yellow-500"
          />
          <span>{sunrise}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faChartLine}
            className="mr-2 text-yellow-500"
          />
          <span>{sunset}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faChartLine} className="mr-2 text-green-500" />
          <span>{solarradiation}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faSun} className="mr-2 text-yellow-500" />
          <span>{solarenergy}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faWind} className="mr-2 text-blue-500" />
          <span>{pressure}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faSmog} className="mr-2 text-gray-500" />
          <span>{dew}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCloud} className="mr-2 text-gray-500" />
          <span>{cloudcover}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCloudSun} className="mr-2 text-gray-500" />
          <span>{visibility}</span>
        </div>
      </div>
    </div>
  );
}

interface DayData {
  conditions: string;
  datetime: string;
  icon: string;
  tempmin: number;
  tempmax: number;
  visibility: number;
  sunset: string;
  sunrise: string;
  solarradiation: string;
  solarenergy: string;
  pressure: number;
  dew: number;
  cloudcover: number;
}
