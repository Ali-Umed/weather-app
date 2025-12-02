import { daysData } from "./WeekDetails";

export default function ToggleDayWeek({
  data,
  status,
  setStatus,
  setDay,
  isDayMode,
}: {
  data: daysData | null;
  status: string;
  setStatus: (arg: string) => void;
  setDay: (arg: null | number) => void;
  isDayMode: boolean;
}) {
  function handleWeekClick() {
    setStatus("week");
    setDay(null);
  }

  return (
    <div className={`flex justify-center gap-4 mt-4 mb-6 p-1 rounded-xl ${
      isDayMode ? "glass-day" : "glass-night"
    }`}>
      <button
        onClick={() => {
          if (data) {
            setStatus("day");
            setDay(0);
          }
        }}
        className={`px-8 py-2 rounded-lg font-semibold smooth-transition hover-scale ${
          status == "day"
            ? isDayMode
              ? "bg-sky-500 text-white shadow-md"
              : "bg-sky-500 text-white shadow-md"
            : isDayMode
            ? "text-gray-700 hover:bg-white/40"
            : "text-gray-300 hover:bg-slate-700/40"
        }`}
      >
        Day
      </button>
      <button
        onClick={handleWeekClick}
        className={`px-8 py-2 rounded-lg font-semibold smooth-transition hover-scale ${
          status == "week"
            ? isDayMode
              ? "bg-sky-500 text-white shadow-md"
              : "bg-sky-500 text-white shadow-md"
            : isDayMode
            ? "text-gray-700 hover:bg-white/40"
            : "text-gray-300 hover:bg-slate-700/40"
        }`}
      >
        Week
      </button>
    </div>
  );
}
