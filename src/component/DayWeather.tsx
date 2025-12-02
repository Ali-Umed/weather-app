import {
  faCloudSun,
  faWind,
  faCloud,
  faSmog,
  faTimes,
  faSolarPanel,
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
  WiSunrise,
  WiSunset,
  WiStrongWind,
} from "react-icons/wi";

export default function DayWeather({
  day,
  setDay,
  setStatus,
  isDayMode,
}: {
  day: DayData;
  setDay: (arg: null) => void;
  setStatus: (status: string) => void;
  isDayMode: boolean;
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
    <div
      className={`rounded-2xl p-6 mt-6 w-full max-w-2xl mx-auto weather-card animate-fadeIn ${
        isDayMode ? "glass-day" : "glass-night"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          {getWeatherIcon(icon)}
          <div>
            <p className={`text-base lg:text-xl font-bold ${
              isDayMode ? "text-gray-800" : "text-gray-100"
            }`}>{conditions}</p>
            <p className={`text-sm ${
              isDayMode ? "text-gray-600" : "text-gray-400"
            }`}>{datetime}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className={`text-lg font-bold ${
            isDayMode ? "text-gray-800" : "text-gray-100"
          }`}>
            {convertToFahrenheit(tempmin)}°C - {convertToFahrenheit(tempmax)}°C
          </div>
          <button
            className={`p-2 rounded-lg smooth-transition hover-scale ${
              isDayMode ? "hover:bg-red-100 text-red-600" : "hover:bg-red-900/30 text-red-400"
            }`}
            onClick={() => {
              setDay(null);
              setStatus("week");
            }}
          >
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <hr className={`my-6 ${
        isDayMode ? "border-gray-300" : "border-gray-600"
      }`} />
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className={`flex items-center p-3 rounded-xl smooth-transition ${
          isDayMode ? "hover:bg-white/40" : "hover:bg-slate-700/40"
        }`}>
          <WiSunrise className="w-10 h-10 mr-3 text-amber-500" />
          <span className={`text-sm font-medium ${isDayMode ? "text-gray-800" : "text-white"}`}>{sunrise}</span>
        </div>
        <div className={`flex items-center p-3 rounded-xl smooth-transition ${
          isDayMode ? "hover:bg-white/40" : "hover:bg-slate-700/40"
        }`}>
          <WiSunset className="w-10 h-10 mr-3 text-orange-500" />
          <span className={`text-sm font-medium ${isDayMode ? "text-gray-800" : "text-white"}`}>{sunset}</span>
        </div>
        <div className={`flex items-center p-3 rounded-xl smooth-transition ${
          isDayMode ? "hover:bg-white/40" : "hover:bg-slate-700/40"
        }`}>
          <FontAwesomeIcon
            icon={faSolarPanel}
            className="mr-3 text-emerald-600 w-8 h-8"
          />
          <span className={`text-sm font-medium ${isDayMode ? "text-gray-800" : "text-white"}`}>{solarradiation}</span>
        </div>
        <div className={`flex items-center p-3 rounded-xl smooth-transition ${
          isDayMode ? "hover:bg-white/40" : "hover:bg-slate-700/40"
        }`}>
          <FontAwesomeIcon
            icon={faSolarPanel}
            className="mr-3 text-emerald-600 w-8 h-8"
          />
          <span className={`text-sm font-medium ${isDayMode ? "text-gray-800" : "text-white"}`}>{solarenergy}</span>
        </div>
        <div className={`flex items-center p-3 rounded-xl smooth-transition ${
          isDayMode ? "hover:bg-white/40" : "hover:bg-slate-700/40"
        }`}>
          <FontAwesomeIcon
            icon={faWind}
            className={`mr-3 w-8 h-8 ${isDayMode ? "text-gray-600" : "text-gray-400"}`}
          />
          <span className={`text-sm font-medium ${isDayMode ? "text-gray-800" : "text-white"}`}>{pressure}</span>
        </div>
        <div className={`flex items-center p-3 rounded-xl smooth-transition ${
          isDayMode ? "hover:bg-white/40" : "hover:bg-slate-700/40"
        }`}>
          <FontAwesomeIcon
            icon={faSmog}
            className={`mr-3 w-8 h-8 ${isDayMode ? "text-gray-600" : "text-gray-400"}`}
          />
          <span className={`text-sm font-medium ${isDayMode ? "text-gray-800" : "text-white"}`}>{dew}</span>
        </div>
        <div className={`flex items-center p-3 rounded-xl smooth-transition ${
          isDayMode ? "hover:bg-white/40" : "hover:bg-slate-700/40"
        }`}>
          <FontAwesomeIcon
            icon={faCloud}
            className={`mr-3 w-8 h-8 ${isDayMode ? "text-gray-600" : "text-gray-400"}`}
          />
          <span className={`text-sm font-medium ${isDayMode ? "text-gray-800" : "text-white"}`}>{cloudcover}</span>
        </div>
        <div className={`flex items-center p-3 rounded-xl smooth-transition ${
          isDayMode ? "hover:bg-white/40" : "hover:bg-slate-700/40"
        }`}>
          <FontAwesomeIcon
            icon={faCloudSun}
            className={`mr-3 w-8 h-8 ${isDayMode ? "text-gray-600" : "text-gray-400"}`}
          />
          <span className={`text-sm font-medium ${isDayMode ? "text-gray-800" : "text-white"}`}>{visibility}</span>
        </div>
        <div className={`flex items-center p-3 rounded-xl smooth-transition ${
          isDayMode ? "hover:bg-white/40" : "hover:bg-slate-700/40"
        }`}>
          <WiWindy className={`w-10 h-10 mr-3 ${isDayMode ? "text-gray-600" : "text-gray-400"}`} />
          <span className={`text-sm font-medium ${isDayMode ? "text-gray-800" : "text-white"}`}>{windspeed}</span>
        </div>
        <div className={`flex items-center p-3 rounded-xl smooth-transition ${
          isDayMode ? "hover:bg-white/40" : "hover:bg-slate-700/40"
        }`}>
          <WiStrongWind className={`w-10 h-10 mr-3 ${isDayMode ? "text-gray-600" : "text-gray-400"}`} />
          <span className={`text-sm font-medium ${isDayMode ? "text-gray-800" : "text-white"}`}>{windgust}</span>
        </div>
        <div className={`flex items-center p-3 rounded-xl smooth-transition ${
          isDayMode ? "hover:bg-white/40" : "hover:bg-slate-700/40"
        }`}>
          <FontAwesomeIcon
            icon={faWind}
            className={`mr-3 w-8 h-8 ${isDayMode ? "text-gray-600" : "text-gray-400"}`}
          />
          <span className={`text-sm font-medium ${isDayMode ? "text-gray-800" : "text-white"}`}>{severerisk}</span>
        </div>
        <div className={`flex items-center p-3 rounded-xl smooth-transition ${
          isDayMode ? "hover:bg-white/40" : "hover:bg-slate-700/40"
        }`}>
          <FontAwesomeIcon
            icon={faSmog}
            className={`mr-3 w-8 h-8 ${isDayMode ? "text-gray-600" : "text-gray-400"}`}
          />
          <span className={`text-sm font-medium ${isDayMode ? "text-gray-800" : "text-white"}`}>{humidity}</span>
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
