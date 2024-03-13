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
        className={`text-center font-serif text-base md:text-lg ${
          isDayMode ? " text-black" : " text-white "
        }`}
      >
        Clicl Each Day to See More Detail
      </p>
      <div
        className={`grid grid-cols-1 font-serif md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 justify-items-center overflow-y-auto max-h-[460px]   lg:h-screen  lg:max-h-screen  `}
      >
        {weekWeather?.map((day, index) => (
          <div
            onClick={() => {
              setDay(index);
              setStatus("day");
            }}
            key={index}
            className={`${
              isDayMode
                ? "bg-white text-black"
                : "bg-[rgb(36,40,51)] text-white "
            } p-4 rounded-lg shadow-md items-center overflow-clip justify-center flex w-2/3  md:w-full cursor-pointer  ${
              index === weekWeather.length - 1
                ? "lg:col-start-2 lg:col-end-3"
                : ""
            }
        ${index === weekWeather.length - 1 ? "md:col-start-1 md:col-end-3" : ""}
        `}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-lg font-semibold mb-2">
                {index == 0 && firstWeek
                  ? "Today"
                  : index == 1 && firstWeek
                  ? "Tomorrow"
                  : day.datetime}
              </h1>
              {day.icon === "cloudy" ||
              day.icon === "partly-cloudy-night" ||
              day.icon === "partly-cloudy-day" ? (
                <WiCloudy
                  size={128}
                  color={`${isDayMode ? "black" : "white"}`}
                />
              ) : day.icon === "snow" ? (
                <WiSnow size={128} color={`${isDayMode ? "black" : "white"}`} />
              ) : day.icon === "fog" ? (
                <WiFog size={128} color={`${isDayMode ? "black" : "white"}`} />
              ) : day.icon === "rain" ? (
                <WiRain size={128} color={`${isDayMode ? "black" : "white"}`} />
              ) : day.icon === "clear-day" ? (
                <WiDaySunny
                  size={128}
                  color={`${isDayMode ? "black" : "white"}`}
                />
              ) : day.icon === "clear-night" ? (
                <WiNightClear
                  size={128}
                  color={`${isDayMode ? "black" : "white"}`}
                />
              ) : day.icon === "wind" ? (
                <WiWindy
                  size={128}
                  color={`${isDayMode ? "black" : "white"}`}
                />
              ) : (
                <WiDaySunny
                  size={88}
                  className="mb-4"
                  color={`${isDayMode ? "black" : "white"}`}
                />
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
      <div className="mt-3">
        <ol className="flex justify-center gap-1 text-xs font-medium">
          <li>
            <a
              onClick={() => GetWeekDate(1)}
              className={`inline-flex size-8 items-center  hover:border-none hover:text-white  cursor-pointer justify-center rounded border  ${
                isDayMode
                  ? "bg-white text-black"
                  : "bg-[rgb(36,40,51)] text-white "
              }
              hover:bg-[#48aef3]
               rtl:rotate-180`}
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
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
              className={` block size-8 rounded cursor-pointer  hover:bg-[#48aef3]  hover:text-white ${
                !firstWeek
                  ? " border bg-[rgb(36,40,51)]  "
                  : " border-bg-[#48aef3] bg-[#48aef3] text-white  "
              } ${
                isDayMode
                  ? "bg-white  text-slate-950 "
                  : "bg-[rgb(36,40,51)] text-white"
              } text-center leading-8 `}
            >
              1
            </a>
          </li>

          <li
            onClick={() => GetWeekDate(2)}
            className={` block size-8 rounded cursor-pointer  hover:bg-[#48aef3] hover:text-white ${
              firstWeek
                ? " border bg-[rgb(36,40,51)]  "
                : " border-bg-[#48aef3] bg-[#48aef3] text-white"
            }  ${
              isDayMode
                ? "bg-white  text-slate-950 "
                : "bg-[rgb(36,40,51)] text-white"
            } text-center leading-8 `}
          >
            2
          </li>

          <li>
            <a
              onClick={() => GetWeekDate(2)}
              className={` hover:text-white ${
                isDayMode
                  ? "bg-white  text-black"
                  : "bg-[rgb(36,40,51)] text-white"
              }  inline-flex size-8 items-center  hover:bg-[#48aef3] hover:border-none cursor-pointer justify-center rounded border border-gray-100  text-gray-900 rtl:rotate-180`}
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
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
