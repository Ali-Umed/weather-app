/* eslint-disable @typescript-eslint/no-unused-vars */
import { WiDayShowers } from "react-icons/wi";

export default function StaticWeekDetails() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      <div className="flex justify-between mt-8">
        <span className="text-gray-600 cursor-pointer ">Today</span>
        <span className="text-gray-600 border-b-2 cursor-pointer border-black ">
          Week
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4  ">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded-lg shadow-md  items-center justify-center flex ${
              index === daysOfWeek.length - 1 ? " col-start-2 col-end-3" : ""
            }`}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-lg font-semibold mb-2">{day}</h1>
              <WiDayShowers size={114} color="black" className="mb-2" />
              <div className="text-lg">15°C - 2°C</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
