import { WiDaySunny } from "react-icons/wi";

export default function StaticDetails() {
  return (
    <div className="flex flex-col items-center">
      <h1>Adress: London</h1>

      <WiDaySunny size={88} className="mb-4" />

      <div className="text-2xl font-bold mb-2">"0°C"</div>
      <div className="text-sm mb-4">Monday, 16:00</div>
      <h1 className="text-lg font-semibold mb-2">sun</h1>
      <h1 className="text-lg font-semibold">Rain 30%</h1>
    </div>
  );
}
