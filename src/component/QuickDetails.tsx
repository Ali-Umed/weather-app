import {
  WiDaySunny,
  WiNightClear,
  WiCloudy,
  WiRain,
  WiSnow,
  WiStrongWind,
  WiFog,
  WiThunderstorm,
  WiSprinkle,
  WiTornado,
  WiWindy,
} from "react-icons/wi";

export function QuickDetails({ data }: { data: WeatherData | null }) {
  return (
    <>
      <h1>
        Adress: {data?.resolvedAddress} {data?.address}
      </h1>
      {data ? (
        data.currentConditions.icon === "cloudy" ||
        data.currentConditions.icon === "partly-cloudy-night" ||
        data.currentConditions.icon === "partly-cloudy-day" ? (
          <WiCloudy size={128} />
        ) : data.currentConditions.icon === "snow" ? (
          <WiSnow size={128} />
        ) : data.currentConditions.icon === "fog" ? (
          <WiFog size={128} />
        ) : data.currentConditions.icon === "rain" ? (
          <WiRain size={128} />
        ) : data.currentConditions.icon === "clear-day" ? (
          <WiDaySunny size={128} />
        ) : data.currentConditions.icon === "clear-night" ? (
          <WiNightClear size={128} />
        ) : data.currentConditions.icon === "wind" ? (
          <WiWindy size={128} />
        ) : (
          <WiDaySunny size={88} className="mb-4" />
        )
      ) : (
        <WiDaySunny size={88} className="mb-4" />
      )}
      <div className="text-2xl font-bold mb-2">
        {data
          ? `${Math.round((data.currentConditions.temp - 32) * 0.5555555555)}°C`
          : "0°C"}
      </div>
      <div className="text-sm mb-4">Monday, 16:00</div>
      <h1 className="text-lg font-semibold mb-2">
        {data ? data.currentConditions.conditions : "sun"}
      </h1>
      <h1 className="text-lg font-semibold">Rain 30%</h1>
    </>
  );
}

interface WeatherData {
  resolvedAddress: string;
  address: string;
  currentConditions: {
    icon: string;
    temp: number;
    conditions: string;
  };
}
