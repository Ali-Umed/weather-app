import { WiDaySunny } from "react-icons/wi";

export default function StaticDetails() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-5">Adress: London</h1>

      <WiDaySunny size={160} className="mb-4" />

      <div className="text-5xl font-bold mt-4">20°C</div>
      <div className="text-3xl  font-semibold mt-5">Monday, 16:00</div>
      <h1 className="text-2xl font-semibold mt-5">sun</h1>
      <h1 className="text-2xl font-semibold mt-5">Rain 30%</h1>
    </div>
  );
}
