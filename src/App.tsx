/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { FaReact, FaSearch } from "react-icons/fa";
import Loading from "./component/Loading";
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
} from "react-icons/wi";

const key = "7K6G2YBAY7APWRNHC93TFSTHB";
function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchWeather() {
        setIsLoading(true);
        try {
          const geoRes = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?key=${key}`
          );
          const geoData = await geoRes.json();
          setData(geoData);
          setIsLoading(false);

          console.log(geoData);
        } catch (error) {
          console.log(error);
        }
      }
      if (search.length < 3) {
        return;
      }
      fetchWeather();
    },
    [search]
  );

  return (
    <div className="bg-neutral-100 w-full min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl  shadow-slate-400 w-full md:w-3/4 lg:w-1/2 xl:w-2/5 ">
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Search for places..."
            className="border border-gray-300 rounded px-4 py-2 mb-4 w-full md:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
              ? `${Math.round(
                  (data.currentConditions.temp - 32) * 0.5555555555
                )}°C`
              : "0°C"}
          </div>

          <div className="text-sm mb-4">Monday, 16:00</div>
          <h1 className="text-lg font-semibold mb-2">
            {data ? data.currentConditions.conditions : "sun"}
          </h1>
          <h1 className="text-lg font-semibold">Rain 30%</h1>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className="flex justify-between mt-8">
              <span className="text-gray-600">Today</span>
              <span className="text-gray-600">Week</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-center">
                    <h1 className="text-lg font-semibold mb-2">Sun</h1>
                    <FaReact size={48} color="blue" className="mb-2" />
                    <div className="text-lg">15°C - 2°C</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
