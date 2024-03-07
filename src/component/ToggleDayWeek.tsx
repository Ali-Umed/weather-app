import { daysData } from "./WeekDetails";

export default function ToggleDayWeek({
  data,
  status,
  setStatus,
  setDay,
}: {
  data: daysData | null;
  status: string;
  setStatus: (arg: string) => void;
  setDay: (arg: null | number) => void;
}) {
  function handleWeekClick() {
    setStatus("week");
    setDay(null);
  }

  return (
    <div className="flex justify-between mt-2">
      <span
        onClick={() => {
          setStatus("day");
          if (data) {
            setDay(0);
          }
        }}
        className={`text-gray-600 cursor-pointer border-black  ${
          status == "day" ? " border-b-2" : ""
        }`}
      >
        Day
      </span>
      <span
        onClick={handleWeekClick}
        className={`text-gray-600  cursor-pointer border-black  ${
          status == "week" ? " border-b-2" : ""
        }`}
      >
        Week
      </span>
    </div>
  );
}
