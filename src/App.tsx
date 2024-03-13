// App.js

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
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [day, setDay] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("week");
  const [isDayMode, setIsDayMode] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches
  );

  useEffect(() => {
    const updateDayMode = () => {
      setIsDayMode(window.matchMedia("(prefers-color-scheme: light)").matches);
    };

    updateDayMode();

    const handleSystemColorSchemeChange = () => {
      updateDayMode();
    };

    const systemColorSchemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: light)"
    );
    systemColorSchemeMediaQuery.addEventListener(
      "change",
      handleSystemColorSchemeChange
    );

    return () => {
      systemColorSchemeMediaQuery.removeEventListener(
        "change",
        handleSystemColorSchemeChange
      );
    };
  }, []); // Run this effect only once on component mount

  const toggleDayMode = () => {
    setIsDayMode(!isDayMode);
  };

  useEffect(() => {
    const items = localStorage.getItem(`location`);
    if (items) {
      setData(JSON.parse(items));
    }
  }, []);

  useEffect(() => {
    if (data) {
      localStorage.setItem(`location`, JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchWeather() {
      setIsLoading(true);
      // setData(null);
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

  async function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          setIsLoading(true);

          try {
            const geoRes = await fetch(
              `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${key}`
            );
            const geoData = await geoRes.json();
            setData(geoData);
            localStorage.setItem("location", JSON.stringify(data));
            setIsLoading(false);
            setError(null);
          } catch (err) {
            setError("Can Not Fetch Data Search Again");
            setIsLoading(false);
          }
        },
        (error) => {
          setError(`Accept Location to See current Weather : ${error.message}`);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div
      className={`  ${
        isDayMode ? "bg-[#fff]" : "bg-[#000000]"
      } min-h-screen flex justify-center items-center relative`}
    >
      <div
        className={`${
          isDayMode ? "bg-[#f1f9fe]" : "bg-[rgb(25,27,35)]"
        } min-h-[950px] rounded-xl shadow-2xl w-full md:w-11/12 lg:w-11/12 xl:w-10/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 relative`}
      >
        <div className="col-span-3">
          <NavBar
            query={query}
            setQuery={setQuery}
            isDayMode={isDayMode}
            toggleDayMode={toggleDayMode}
            getLocation={getLocation}
          />
        </div>
        <div className="flex flex-col items-center h-full w-full z-0 col-span-2 md:col-span-1 p-2 sm:p-3 md:p-6 lg:py-20">
          <Error error={error} isDayMode={isDayMode} />

          {data === null ? (
            <StaticDetails isDayMode={isDayMode} />
          ) : (
            <QuickDetails data={data} isDayMode={isDayMode} />
          )}
        </div>
        <div className="col-span-2 p-2 sm:p-3 md:p-6">
          <Loading isLoading={isLoading} />
          {isLoading ? (
            <>
              <ToggleDayWeek
                data={data}
                setDay={setDay}
                status={status}
                setStatus={setStatus}
                isDayMode={isDayMode}
              />
              <StaticWeekDetails isDayMode={isDayMode} />
            </>
          ) : (
            data == null && (
              <>
                <ToggleDayWeek
                  data={data}
                  setDay={setDay}
                  status={status}
                  setStatus={setStatus}
                  isDayMode={isDayMode}
                />
                <StaticWeekDetails isDayMode={isDayMode} />
              </>
            )
          )}
          {!isLoading && data && day === null && (
            <>
              <ToggleDayWeek
                data={data}
                setDay={setDay}
                status={status}
                setStatus={setStatus}
                isDayMode={isDayMode}
              />
              <WeekDetails
                data={data}
                setDay={setDay}
                setStatus={setStatus}
                isDayMode={isDayMode}
              />
            </>
          )}
          {day !== null && data && data.days !== undefined && (
            <>
              <ToggleDayWeek
                status={status}
                setStatus={setStatus}
                setDay={setDay}
                data={data}
                isDayMode={isDayMode}
              />
              <DayWeather
                day={data?.days?.[day]}
                setDay={setDay}
                setStatus={setStatus}
                isDayMode={isDayMode}
              />
            </>
          )}
        </div>
        <Footer isDayMode={isDayMode} />
      </div>
    </div>
  );
}

export default App;
