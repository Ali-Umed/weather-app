import { useEffect, useState } from "react";

export function useMode() {
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
  }, []);
  return { isDayMode, setIsDayMode };
}
