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

export function QuickDetails({
  data,
  query,
  setQuery,
}: {
  data: WeatherData | null;
  query: string;
  setQuery: (query: string) => void;
}) {
  console.log(data);
  console.log(setQuery);
  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="search for places..."
        className="border border-gray-300 rounded px-4 py-2 mb-4 w-full md:w-64"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
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
    </div>
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
