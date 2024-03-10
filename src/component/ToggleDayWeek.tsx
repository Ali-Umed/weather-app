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
    <div className="flex justify-between mt-2    ">
      <span
        onClick={() => {
          if (data) {
            setStatus("day");
            setDay(0);
          }
        }}
        className={` cursor-pointer   ${
          status == "day" ? " border-b-2" : ""
        }  ${
          isDayMode
            ? "text-gray-600  border-gray-600"
            : "text-gray-300 border-white"
        }  `}
      >
        Day
      </span>
      <span
        onClick={handleWeekClick}
        className={`  cursor-pointer   ${status == "week" ? " border-b-2" : ""} 
        ${
          isDayMode
            ? "text-gray-600  border-gray-600"
            : "text-gray-300 border-white"
        }
        `}
      >
        Week
      </span>
    </div>
  );
}
