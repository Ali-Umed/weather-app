import {
  WiDaySunny,
  WiNightClear,
  WiCloudy,
  WiRain,
  WiSnow,
  WiFog,
  WiWindy,
} from "react-icons/wi";

export function QuickDetails({ data }: { data: WeatherData | null }) {
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
        return <WiDaySunny size={88} className="mt-4" />;
    }
  };

  const convertToFahrenheit = (temp: number | undefined) => {
    return `${Math.round((temp ?? -32) * 0.5555555555)}°C`;
  };

  return (
    <>
      <h1 className="mt-6 text-2xl text-center">
        Address: <span className="font-medium">{data?.resolvedAddress}</span>
      </h1>
      {getWeatherIcon()}
      <div className="text-5xl font-bold mt-4">
        {convertToFahrenheit(data?.currentConditions.temp)}
      </div>
      <div className="text-xl font-semibold mt-5">
        Last Time Update: {data?.currentConditions.datetime}
      </div>
      <h1 className="text-2xl font-semibold mt-5">
        {data?.currentConditions.conditions}
      </h1>
      <div className="text-xl font-semibold mt-5">
        Sunrise: {data?.currentConditions.sunrise}
      </div>
      <div className="text-xl font-semibold mt-5">
        Sunset: {data?.currentConditions.sunset}
      </div>
    </>
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
