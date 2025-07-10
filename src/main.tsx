import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// Initialize theme based on user preference
const savedTheme = localStorage.theme;
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Remove all theme classes first
document.documentElement.classList.remove("dark", "neutral", "dark-alt");

if (savedTheme) {
  // Apply saved theme (except light which is default)
  if (savedTheme !== "light") {
    document.documentElement.classList.add(savedTheme);
  }
} else {
  // Default to dark if user prefers dark mode
  if (prefersDark) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
