import { useState } from "react";
import {
  WiCloudy,
  WiDaySunny,
  WiFog,
  WiNightClear,
  WiRain,
  WiSnow,
  WiWindy,
} from "react-icons/wi";

export default function WeekDetails({
  data,
  setDay,
}: {
  data: daysData | never;
  setDay: (day: number) => void;
}) {
  const [status, setStatus] = useState("week");
  console.log(data);
  // const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const last7Days = data?.days?.slice(0, 7);

  return (
    <div>
      <div className="flex justify-between mt-8">
        <span
          onClick={() => setStatus("day")}
          className={`text-gray-600 cursor-pointer border-black  ${
            status == "day" ? " border-b-2" : ""
          }`}
        >
          Today
        </span>
        <span
          onClick={() => setStatus("week")}
          className={`text-gray-600  cursor-pointer border-black  ${
            status == "week" ? " border-b-2" : ""
          }`}
        >
          Week
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {last7Days?.map((day, index) => (
          <div
            onClick={() => setDay(index)}
            key={index}
            className={`bg-white p-4 rounded-lg shadow-md items-center justify-center flex  cursor-pointer ${
              index === last7Days.length - 1
                ? "lg:col-start-2 lg:col-end-3"
                : ""
            }`}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-lg font-semibold mb-2">{day.datetime}</h1>
              {day.icon === "cloudy" ||
              day.icon === "partly-cloudy-night" ||
              day.icon === "partly-cloudy-day" ? (
                <WiCloudy size={128} />
              ) : day.icon === "snow" ? (
                <WiSnow size={128} />
              ) : day.icon === "fog" ? (
                <WiFog size={128} />
              ) : day.icon === "rain" ? (
                <WiRain size={128} />
              ) : day.icon === "clear-day" ? (
                <WiDaySunny size={128} />
              ) : day.icon === "clear-night" ? (
                <WiNightClear size={128} />
              ) : day.icon === "wind" ? (
                <WiWindy size={128} />
              ) : (
                <WiDaySunny size={88} className="mb-4" />
              )}
              {
                <>
                  {Math.round((day.tempmin - 32) * 0.5555555555)}
                  °C - {Math.round((day.tempmax - 32) * 0.5555555555)}
                  °C
                </>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export interface daysData {
  days: {
    icon: string;
    tempmin: number;
    tempmax: number;
    conditions: string;
    datetime: string;
  }[];
}