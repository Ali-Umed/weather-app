export default function ToggleDayWeek({
  status,
  setStatus,
  setDay,
}: {
  status: string;
  setStatus: (arg: string) => void;
  setDay: (arg: null) => void;
}) {
  function handleWeekClick() {
    setStatus("week");
    setDay(null);
  }

  return (
    <div className="flex justify-between mt-2">
      <span
        onClick={() => setStatus("day")}
        className={`text-gray-600 cursor-pointer border-black  ${
          status == "day" ? " border-b-2" : ""
        }`}
      >
        Today
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
