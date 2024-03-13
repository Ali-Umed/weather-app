import { useEffect, useState } from "react";
import { WeatherData } from "../component/QuickDetails";

export function useLocalStorage() {
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const items = localStorage.getItem(`location`);
    if (items) {
      setData(JSON.parse(items));
    }
  }, [setData]);

  useEffect(() => {
    if (data) {
      localStorage.setItem(`location`, JSON.stringify(data));
    }
  }, [data]);
  return { data, setData };
}
