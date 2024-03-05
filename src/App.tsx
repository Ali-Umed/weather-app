/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Loading from "./component/Loading";

import { QuickDetails } from "./component/QuickDetails";
import StaticDetails from "./component/StaticDetails";
import StaticWeekDetails from "./component/StaticWeekDetails";
import Error from "./component/Error";
import WeekDetails from "./component/WeekDetails";

const key = "7K6G2YBAY7APWRNHC93TFSTHB";
function App() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchWeather() {
        setIsLoading(true);
        setError(null);

        try {
          const geoRes = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?key=${key}`,
            { signal: controller.signal }
          );
          const geoData = await geoRes.json();
          setData(geoData);
          setIsLoading(false);
          setError(null);

          console.log(geoData);
        } catch (er) {
          setError("Can Not Fetch Data");
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        return;
      }
      fetchWeather();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <div className="bg-neutral-100 w-full h-full flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl  shadow-slate-400 w-full md:w-3/4 lg:w-1/2 xl:w-2/5 ">
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="search for places..."
            className="border border-gray-300 rounded px-4 py-2 mb-4 w-full md:w-64"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {data === null ? <StaticDetails /> : <QuickDetails data={data} />}
        </div>

        {isLoading ? (
          <>
            <Loading />
            <StaticWeekDetails />
          </>
        ) : (
          ((error || !data) && (
            <>
              <Error error={error} />
              <StaticWeekDetails />
            </>
          )) || <WeekDetails data={data} />
        )}
      </div>
    </div>
  );
}
export default App;
