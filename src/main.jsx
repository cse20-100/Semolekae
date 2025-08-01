// src/main.jsx or src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/global.css";

import App from "./App"; // ✅ This is now your router

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
