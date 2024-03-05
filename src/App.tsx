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

  useEffect(() => {
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
      } catch (err) {
        setError("Can Not Fetch Data Search Again");
        setIsLoading(false);
      }
    }

    if (query.length >= 3) {
      fetchWeather();
    } else {
      setIsLoading(false);
    }

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div className="bg-neutral-100 min-h-screen flex justify-center items-center ">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full  md:w-11/12 lg:w-11/12 xl:w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div className="flex flex-col items-center h-full w-full">
          <input
            type="text"
            placeholder="Search for places..."
            className="border border-gray-300 mt-5 rounded px-4 py-2 mb-4 w-full md:w-64"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {(error || !data) && (
            <>
              <Error error={error} />
            </>
          )}

          {data === null ? <StaticDetails /> : <QuickDetails data={data} />}
        </div>
        <div>
          {isLoading ? (
            <>
              <Loading />
              <StaticWeekDetails />
            </>
          ) : (
            (error || !data) && (
              <>
                <StaticWeekDetails />
              </>
            )
          )}
          {!isLoading && !error && data && <WeekDetails data={data} />}
        </div>
      </div>
    </div>
  );
}

export default App;
