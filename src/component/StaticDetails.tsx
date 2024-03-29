import { WiDaySunny } from "react-icons/wi";

export default function StaticDetails({ isDayMode }: { isDayMode: boolean }) {
  return (
    <div
      className={`flex flex-col items-center ${
        isDayMode ? "text-black" : "text-white"
      } `}
    >
      <h1 className="mt-6 text-2xl text-center">
        Adress: <span className="font-medium">London</span>{" "}
      </h1>

      <WiDaySunny size={160} className="mt-12" />

      <div className="text-5xl font-bold mt-1">20°C</div>
      <div className="text-2xl  font-semibold mt-12 text-center">
        Last Time Update: Monday, 16:00
      </div>
      <h1 className="text-2xl font-semibold mt-5">Sun</h1>
      <h1 className="text-2xl font-semibold mt-5">Rain 05%</h1>
    </div>
  );
}
