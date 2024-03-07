import {
  faSun,
  faCloudSun,
  faWind,
  faCloud,
  faSmog,
  faChartLine,
  faTemperature0,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiFog,
  WiWindy,
  WiNightClear,
} from "react-icons/wi";

export default function DayWeather({
  day,
  setDay,
  setStatus,
}: {
  day: DayData;
  setDay: (arg: null) => void;
  setStatus: (status: string) => void;
}) {
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
    windspeed,
    windgust,
    severerisk,
    humidity,
  } = day;

  const convertToFahrenheit = (temp: number) => {
    return Math.round((temp - 32) * 0.5555555555);
  };

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case "cloudy":
      case "partly-cloudy-night":
      case "partly-cloudy-day":
        return <WiCloudy className="w-12 h-12 mr-4" />;
      case "snow":
        return <WiSnow className="w-12 h-12 mr-4" />;
      case "fog":
        return <WiFog className="w-12 h-12 mr-4" />;
      case "rain":
        return <WiRain className="w-12 h-12 mr-4" />;
      case "clear-day":
        return <WiDaySunny className="w-12 h-12 mr-4" />;
      case "clear-night":
        return <WiNightClear className="w-12 h-12 mr-4" />;
      case "wind":
        return <WiWindy className="w-12 h-12 mr-4" />;
      default:
        return <WiDaySunny className="w-12 h-12 mr-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-3">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          {getWeatherIcon(icon)}
          <div>
            <p className="text-lg font-semibold">{conditions}</p>
            <p className="text-sm">{datetime}</p>
          </div>
        </div>
        <div className="text-lg font-semibold">
          <FontAwesomeIcon icon={faTemperature0} className="mr-2 " />
          {convertToFahrenheit(tempmin)}°C - {convertToFahrenheit(tempmax)}°C
          <FontAwesomeIcon
            icon={faTimes}
            className="ml-4 text-red-300 size-7 cursor-pointer"
            onClick={() => {
              setDay(null);
              setStatus("week");
            }}
          />
        </div>
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-2 gap-2 justify-items-center">
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
          <FontAwesomeIcon icon={faWind} className="mr-2 " />
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
        <div className="flex items-center">
          <FontAwesomeIcon icon={faWind} className="mr-2 " />
          <span>{windspeed}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faWind} className="mr-2 " />
          <span>{windgust}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faWind} className="mr-2 " />
          <span>{severerisk}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faSmog} className="mr-2 text-gray-500" />
          <span>{humidity}</span>
        </div>
      </div>
    </div>
  );
}

export interface DayData {
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
  windspeed: string;
  windgust: string;
  severerisk: string;
  humidity: string;
}
