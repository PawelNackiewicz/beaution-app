import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { AppProvider } from "./AppContext";
import { MainTemplate } from "./components/templates/main-template";

function App() {
  const [count, setCount] = useState(0);
  const environment = import.meta.env.VITE_ENVIRONMENT || "unknown";

  return (
    <AppProvider>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </div>
        <MainTemplate />
        <p>Env: {environment}</p>
      </div>
    </AppProvider>
  );
}

export default App;
