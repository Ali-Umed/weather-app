export default function Loading({ isLoading }) {
  return (
    <div
      className={`flex justify-center items-center fixed inset-0 ${
        isLoading ? "" : "hidden"
      }`}
    >
      <div className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}
