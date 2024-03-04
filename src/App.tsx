/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { FaReact, FaSearch } from "react-icons/fa";
import Loading from "./component/Loading";

import { QuickDetails } from "./QuickDetails";

const key = "7K6G2YBAY7APWRNHC93TFSTHB";
function App() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchWeather() {
        setIsLoading(true);
        try {
          const geoRes = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?key=${key}`
          );
          const geoData = await geoRes.json();
          setData(geoData);
          setIsLoading(false);

          console.log(geoData);
        } catch (error) {
          console.log(error);
        }
      }
      if (query.length < 3) {
        return;
      }
      fetchWeather();
    },
    [query]
  );

  return (
    <div className="bg-neutral-100 w-full min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl  shadow-slate-400 w-full md:w-3/4 lg:w-1/2 xl:w-2/5 ">
        <QuickDetails data={data} query={query} setQuery={setQuery} />
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
