import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline  ">Vite + React</h1>
      <button
        className="bg-red-400 rounded-xl"
        onClick={() => setCount((count) => count * -1)}
      >
        count is {count}
      </button>
    </>
  );
}

export default App;
