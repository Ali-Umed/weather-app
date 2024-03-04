/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Loading from "./component/Loading";

import { QuickDetails } from "./component/QuickDetails";
import StaticDetails from "./component/StaticDetails";
import StaticWeekDetails from "./component/StaticWeekDetails";
import Error from "./component/Error";

const key = "7K6G2YBAY7APWRNHC93TFSTHB";
function App() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
          console.log(data);
        } catch (er) {
          setError("Can Not Fetch Data");
          setIsLoading(false);
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
        ) : error ? (
          <>
            <Error error={error} />
            <StaticWeekDetails />
          </>
        ) : (
          <StaticWeekDetails />
        )}
      </div>
    </div>
  );
}
export default App;
