import React from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
