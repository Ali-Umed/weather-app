import {
  WiDaySunny,
  WiNightClear,
  WiCloudy,
  WiRain,
  WiSnow,
  WiFog,
  WiWindy,
} from "react-icons/wi";

export function QuickDetails({
  data,
  isDayMode,
}: {
  data: WeatherData | null;
  isDayMode: boolean;
}) {
  const getWeatherIcon = () => {
    switch (data?.currentConditions.icon) {
      case "cloudy":
      case "partly-cloudy-night":
      case "partly-cloudy-day":
        return <WiCloudy size={160} className="mt-4" />;
      case "snow":
        return <WiSnow size={160} className="mt-4" />;
      case "fog":
        return <WiFog size={160} className="mt-4" />;
      case "rain":
        return <WiRain size={160} className="mt-4" />;
      case "clear-day":
        return <WiDaySunny size={160} className="mt-4" />;
      case "clear-night":
        return <WiNightClear size={160} className="mt-4" />;
      case "wind":
        return <WiWindy size={160} className="mt-4" />;
      default:
        return <WiDaySunny size={88} className="mt-4 " />;
    }
  };

  const convertFahrenheit = (temp: number | undefined) => {
    if (temp) {
      return `${Math.round((temp - 32) * 0.5555555555)}°C `;
    }
  };

  return (
    <div
      className={`${
        isDayMode ? "text-gray-900" : "text-white"
      } flex flex-col items-center w-full animate-fadeIn`}
    >
      <h1
        className={`mt-6 text-2xl text-center font-semibold ${
          isDayMode ? "text-gray-800" : "text-gray-100"
        }`}
      >
        <span className={`${isDayMode ? "text-gray-600" : "text-gray-400"} font-normal text-lg`}>
          Address:{" "}
        </span>
        <span className="font-bold text-gradient">
          {Number(data?.resolvedAddress.charAt(1))
            ? "Your Location"
            : data?.resolvedAddress}
        </span>
      </h1>
      <div className="animate-float mt-4">
        {getWeatherIcon()}
      </div>
      <div className="text-6xl font-bold mt-6 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
        {convertFahrenheit(data?.currentConditions.temp)}
      </div>
      <div className={`text-sm font-medium mt-6 px-6 py-2 rounded-full ${
        isDayMode ? "glass-day" : "glass-night"
      }`}>
        Last Update: {data?.currentConditions.datetime}
      </div>
      <h2 className="text-3xl font-bold mt-6">
        {data?.currentConditions.conditions}
      </h2>
      <div className={`grid grid-cols-2 gap-6 mt-8 w-full max-w-sm`}>
        <div className={`px-6 py-4 rounded-2xl text-center smooth-transition ${
          isDayMode ? "glass-day hover:bg-white/40" : "glass-night hover:bg-slate-700/40"
        }`}>
          <div className={`text-sm font-medium ${isDayMode ? "text-gray-600" : "text-gray-400"}`}>
            Sunrise
          </div>
          <div className="text-xl font-bold mt-2">
            {data?.currentConditions.sunrise}
          </div>
        </div>
        <div className={`px-6 py-4 rounded-2xl text-center smooth-transition ${
          isDayMode ? "glass-day hover:bg-white/40" : "glass-night hover:bg-slate-700/40"
        }`}>
          <div className={`text-sm font-medium ${isDayMode ? "text-gray-600" : "text-gray-400"}`}>
            Sunset
          </div>
          <div className="text-xl font-bold mt-2">
            {data?.currentConditions.sunset}
          </div>
        </div>
      </div>
    </div>
  );
}

export interface WeatherData {
  resolvedAddress: string;
  days: [];
  address: string;
  currentConditions: {
    icon: string;
    temp: number;
    conditions: string;
    datetime: string;
    sunrise: string;
    sunset: string;
  };
}
