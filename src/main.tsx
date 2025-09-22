import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // 👈 no need to write .tsx, Vite/TS handles it
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
