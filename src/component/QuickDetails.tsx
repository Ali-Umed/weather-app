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
      <h1 className="mt-5 text-3xl font-bold ">
        Adress: {data?.resolvedAddress}
      </h1>
      {data ? (
        data.currentConditions.icon === "cloudy" ||
        data.currentConditions.icon === "partly-cloudy-night" ||
        data.currentConditions.icon === "partly-cloudy-day" ? (
          <WiCloudy size={160} className="mb-4" />
        ) : data.currentConditions.icon === "snow" ? (
          <WiSnow size={160} className="mb-4" />
        ) : data.currentConditions.icon === "fog" ? (
          <WiFog size={160} className="mb-4" />
        ) : data.currentConditions.icon === "rain" ? (
          <WiRain size={160} className="mb-4" />
        ) : data.currentConditions.icon === "clear-day" ? (
          <WiDaySunny size={160} className="mb-4" />
        ) : data.currentConditions.icon === "clear-night" ? (
          <WiNightClear size={160} className="mb-4" />
        ) : data.currentConditions.icon === "wind" ? (
          <WiWindy size={160} className="mb-4" />
        ) : (
          <WiDaySunny size={88} className="mb-4" />
        )
      ) : (
        <WiDaySunny size={88} className="mb-4" />
      )}
      <div className="text-5xl font-bold mt-4">
        {`${Math.round((data?.currentConditions.temp - 32) * 0.5555555555)}°C`}
      </div>
      <div className="text-2xl  font-semibold mt-5">
        {" "}
        Last Time Update: {data?.currentConditions.datetime}
      </div>
      <h1 className="text-2xl font-semibold mt-5">
        {data?.currentConditions.conditions}
      </h1>
      {/* <h1 className="text-lg font-semibold">Rain 30%</h1> */}
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
    datetime: string;
  };
}
