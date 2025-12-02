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
  setStatus,
  isDayMode,
}: {
  data: daysData | null;
  setDay: (day: number) => void;
  setStatus: (status: string) => void;
  isDayMode: boolean;
}) {
  const [weekWeather, setWeekWeather] = useState(data?.days?.slice(0, 7));
  const [firstWeek, setFirstWeek] = useState<boolean>(true);

  function GetWeekDate(num: number) {
    if (num > 0 && num < 3) {
      if (num === 1) {
        setWeekWeather(data?.days?.slice(0, 7));
        setFirstWeek(true);
      } else {
        setWeekWeather(data?.days?.slice(7, 14));
        setFirstWeek(false);
      }
    }
  }

  return (
    <>
      <p
        className={`text-center text-base md:text-lg font-semibold mb-2 ${
          isDayMode ? "text-gray-700" : "text-gray-300"
        }`}
      >
        Click Each Day to See More Detail
      </p>
      <div
        className={`grid grid-cols-1 font-serif md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 justify-items-center overflow-y-auto max-h-[460px]`}
      >
        {weekWeather?.map((day, index) => (
          <div
            onClick={() => {
              setDay(index);
              setStatus("day");
            }}
            key={index}
            className={`weather-card cursor-pointer p-6 rounded-2xl w-2/3 md:w-full smooth-transition hover-lift animate-fadeIn stagger-${Math.min(index + 1, 7)} ${
              isDayMode
                ? "glass-day hover:bg-white/60"
                : "glass-night hover:bg-slate-700/40"
            }`}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className={`text-lg font-bold mb-3 ${
                isDayMode ? "text-gray-800" : "text-gray-100"
              }`}>
                {index == 0 && firstWeek
                  ? "Today"
                  : index == 1 && firstWeek
                  ? "Tomorrow"
                  : day.datetime}
              </h1>
              <div className="my-2">
                {day.icon === "cloudy" ||
                day.icon === "partly-cloudy-night" ||
                day.icon === "partly-cloudy-day" ? (
                  <WiCloudy
                    size={128}
                    color={`${isDayMode ? "#334155" : "#e2e8f0"}`}
                  />
                ) : day.icon === "snow" ? (
                  <WiSnow size={128} color={`${isDayMode ? "#334155" : "#e2e8f0"}`} />
                ) : day.icon === "fog" ? (
                  <WiFog size={128} color={`${isDayMode ? "#334155" : "#e2e8f0"}`} />
                ) : day.icon === "rain" ? (
                  <WiRain size={128} color={`${isDayMode ? "#334155" : "#e2e8f0"}`} />
                ) : day.icon === "clear-day" ? (
                  <WiDaySunny
                    size={128}
                    color={`${isDayMode ? "#334155" : "#e2e8f0"}`}
                  />
                ) : day.icon === "clear-night" ? (
                  <WiNightClear
                    size={128}
                    color={`${isDayMode ? "#334155" : "#e2e8f0"}`}
                  />
                ) : day.icon === "wind" ? (
                  <WiWindy
                    size={128}
                    color={`${isDayMode ? "#334155" : "#e2e8f0"}`}
                  />
                ) : (
                  <WiDaySunny
                    size={88}
                    className="mb-4"
                    color={`${isDayMode ? "#334155" : "#e2e8f0"}`}
                  />
                )}
              </div>
              <div className={`text-lg font-semibold ${
                isDayMode ? "text-gray-700" : "text-gray-200"
              }`}>
                {Math.round((day.tempmin - 32) * 0.5555555555)}
                °C - {Math.round((day.tempmax - 32) * 0.5555555555)}
                °C
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <ol className="flex justify-center gap-2 text-xs font-medium">
          <li>
            <a
              onClick={() => GetWeekDate(1)}
              className={`inline-flex size-9 items-center justify-center rounded-lg border cursor-pointer smooth-transition hover-scale ${
                isDayMode
                  ? "glass-day hover:bg-sky-500 hover:text-white"
                  : "glass-night hover:bg-sky-500 hover:text-white"
              }`}
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              onClick={() => GetWeekDate(1)}
              className={`block size-9 rounded-lg cursor-pointer smooth-transition text-center leading-9 font-semibold ${
                !firstWeek
                  ? isDayMode ? "glass-day" : "glass-night"
                  : isDayMode ? "bg-sky-500 text-white" : "bg-sky-500 text-white"
              } hover:bg-sky-500 hover:text-white`}
            >
              1
            </a>
          </li>

          <li
            onClick={() => GetWeekDate(2)}
            className={`block size-9 rounded-lg cursor-pointer smooth-transition text-center leading-9 font-semibold ${
              firstWeek
                ? isDayMode ? "glass-day" : "glass-night"
                : isDayMode ? "bg-sky-500 text-white" : "bg-sky-500 text-white"
            } hover:bg-sky-500 hover:text-white`}
          >
            2
          </li>

          <li>
            <a
              onClick={() => GetWeekDate(2)}
              className={`inline-flex size-9 items-center justify-center rounded-lg border cursor-pointer smooth-transition hover-scale ${
                isDayMode
                  ? "glass-day hover:bg-sky-500 hover:text-white"
                  : "glass-night hover:bg-sky-500 hover:text-white"
              }`}
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </>
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
