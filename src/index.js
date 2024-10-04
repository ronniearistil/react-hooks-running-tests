// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";  // Correct import for React 18
import App from "./components/App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

