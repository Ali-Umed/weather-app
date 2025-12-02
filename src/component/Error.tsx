export default function Error({
  error,
  isDayMode,
}: {
  error: string | null;
  isDayMode: boolean;
}) {
  return (
    <section
      className={`absolute top-12 lg:top-12 left-1/2 -translate-x-1/2 items-center px-0 py-2 lg:px-20 z-50 text-center animate-slideInLeft ${
        error ? "visible" : "invisible"
      }`}
    >
      <div
        className={`w-full rounded-2xl smooth-transition ${
          isDayMode
            ? "glass-day text-amber-800 border-amber-300"
            : "glass-night text-amber-300 border-amber-500/30"
        } border`}
        style={{ boxShadow: "var(--shadow-lg)" }}
      >
        <div className="flex items-center justify-between px-6 py-4 mx-auto">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
              <polyline points="11 12 12 12 12 16 13 16"></polyline>
            </svg>
            <p className="text-xs md:text-sm font-semibold tracking-wide">
              <strong>Warning:</strong> {error}
            </p>
          </div>
          <button
            className={`p-1.5 rounded-lg smooth-transition hover-scale ${
              isDayMode ? "hover:bg-amber-100" : "hover:bg-amber-900/30"
            } focus:outline-none`}
            type="button"
            aria-label="Close"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M10 10l4 4m0 -4l-4 4"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
