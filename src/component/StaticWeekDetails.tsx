/* eslint-disable @typescript-eslint/no-unused-vars */
import { WiDayShowers } from "react-icons/wi";

export default function StaticWeekDetails() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4  overflow-y-auto h-screen  ">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className={`bg-white p-4  rounded-lg shadow-md  overflow-clip  items-center justify-center flex  ${
              index === daysOfWeek.length - 1
                ? " lg:col-start-2 lg:col-end-3"
                : ""
            }`}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-lg font-semibold mb-4">{day}</h1>
              <WiDayShowers size={114} color="black" className="mb-2" />
              <div className="text-lg">15°C - 2°C</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
