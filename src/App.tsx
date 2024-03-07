import { useEffect, useState } from "react";
import Loading from "./component/Loading";
import { QuickDetails, WeatherData } from "./component/QuickDetails";
import StaticDetails from "./component/StaticDetails";
import StaticWeekDetails from "./component/StaticWeekDetails";
import Error from "./component/Error";
import WeekDetails from "./component/WeekDetails";
import DayWeather from "./component/DayWeather";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import ToggleDayWeek from "./component/ToggleDayWeek";

const key = "7K6G2YBAY7APWRNHC93TFSTHB";

function App() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [day, setDay] = useState<number | null>(null);
  const [status, setStatus] = useState("week");

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
    <div className="bg-[#fff] min-h-screen flex justify-center items-center relative ">
      <div className="bg-[#F1F9FE]  rounded-xl shadow-2xl w-full  md:w-11/12 lg:w-11/12 xl:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="col-span-3">
          <NavBar query={query} setQuery={setQuery} />
        </div>
        <div className="flex flex-col items-center h-full w-full z-0 col-span-2 md:col-span-1 p-2 sm:p-3 md:p-6">
          <Error error={error} />

          {data === null ? <StaticDetails /> : <QuickDetails data={data} />}
        </div>
        <div className="col-span-2 p-2 sm:p-3 md:p-6">
          <Loading isLoading={isLoading} />
          {isLoading ? (
            <>
              <ToggleDayWeek
                setDay={setDay}
                status={status}
                setStatus={setStatus}
              />
              <StaticWeekDetails />
            </>
          ) : (
            data == null && (
              <>
                <ToggleDayWeek
                  setDay={setDay}
                  status={status}
                  setStatus={setStatus}
                />
                <StaticWeekDetails />
              </>
            )
          )}
          {!isLoading && !error && data && day === null && (
            <>
              <ToggleDayWeek
                setDay={setDay}
                status={status}
                setStatus={setStatus}
              />
              <WeekDetails data={data} setDay={setDay} setStatus={setStatus} />
            </>
          )}
          {day !== null && data && data.days !== undefined && (
            <>
              <ToggleDayWeek
                status={status}
                setStatus={setStatus}
                setDay={setDay}
              />
              <DayWeather
                day={data?.days?.[day]}
                setDay={setDay}
                setStatus={setStatus}
              />
            </>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
