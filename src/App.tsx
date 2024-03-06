import { useEffect, useState } from "react";
import Loading from "./component/Loading";
import { QuickDetails, WeatherData } from "./component/QuickDetails";
import StaticDetails from "./component/StaticDetails";
import StaticWeekDetails from "./component/StaticWeekDetails";
import Error from "./component/Error";
import WeekDetails from "./component/WeekDetails";
import DayWeather from "./component/DayWeather";

const key = "7K6G2YBAY7APWRNHC93TFSTHB";

function App() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [day, setDay] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchWeather() {
      setIsLoading(true);
      setData(null);
      // setError(null);

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

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [error]);

  console.log(
    "day is",
    day,
    "is loading is",
    isLoading,
    "error is",
    error,
    data
  );

  return (
    <div className="bg-neutral-100 min-h-screen flex justify-center items-center relative ">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full  md:w-11/12 lg:w-11/12 xl:w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div className="flex flex-col items-center h-full w-full z-0">
          <input
            type="text"
            placeholder="Search for places..."
            className="border border-gray-300 mt-5 rounded px-4 py-2 mb-4 w-full md:w-64"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Error error={error} />

          {data === null ? <StaticDetails /> : <QuickDetails data={data} />}
        </div>
        <div>
          <Loading isLoading={isLoading} />
          {isLoading ? (
            <>
              <StaticWeekDetails />
            </>
          ) : (
            data == null && (
              <>
                <StaticWeekDetails />
              </>
            )
          )}
          {!isLoading && !error && data && day === null && (
            <WeekDetails data={data} setDay={setDay} />
          )}
          {day !== null && data && data.days !== undefined && (
            <DayWeather day={data?.days?.[day]} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
