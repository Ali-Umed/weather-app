export default function Loading({ isLoading }: { isLoading: boolean }) {
  return (
    <div
      className={`flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ${
        isLoading ? "visible" : "invisible"
      }`}
    >
      <div className="relative">
        <div className="w-16 h-16 border-4 border-transparent border-t-sky-500 border-r-blue-600 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full animate-pulse opacity-20"></div>
      </div>
    </div>
  );
}
