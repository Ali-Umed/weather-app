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
  console.log(data);

  const last7Days = data?.days?.slice(0, 7);

  return (
    <div
      className={`grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 justify-items-center overflow-y-auto max-h-[470px]   lg:h-screen  lg:max-h-screen  `}
    >
      {last7Days?.map((day, index) => (
        <div
          onClick={() => {
            setDay(index);
            setStatus("day");
          }}
          key={index}
          className={`${
            isDayMode ? "bg-white text-black" : "bg-[rgb(36,40,51)] text-white "
          } p-4 rounded-lg shadow-md items-center overflow-clip justify-center flex w-2/3  md:w-full cursor-pointer  ${
            index === last7Days.length - 1 ? "lg:col-start-2 lg:col-end-3" : ""
          }
          ${index === last7Days.length - 1 ? "md:col-start-1 md:col-end-3" : ""}
          `}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-semibold mb-2">
              {index == 0 ? "Today" : index == 1 ? "Tomorrow" : day.datetime}
            </h1>
            {day.icon === "cloudy" ||
            day.icon === "partly-cloudy-night" ||
            day.icon === "partly-cloudy-day" ? (
              <WiCloudy size={128} color={`${isDayMode ? "black" : "white"}`} />
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
              <WiWindy size={128} color={`${isDayMode ? "black" : "white"}`} />
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
