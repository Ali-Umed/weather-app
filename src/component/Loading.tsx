export default function Loading({ isLoading }) {
  console.log(isLoading);

  return (
    <div
      className={`flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        isLoading ? "visible" : "invisible"
      }`}
    >
      <div className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}
