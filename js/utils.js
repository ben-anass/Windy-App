/* ============================================================
   Weather Dashboard
   utils.js
============================================================ */

import {
  CONFIG,
  MONTHS,
  WEEK_DAYS,
  WEATHER_THEMES
} from "./config.js";

/* ============================================================
   Temperature
============================================================ */
export function formatTemperature(value) {
  return `${Math.round(value)}°C`;
}

/* ============================================================
   Date
============================================================ */
export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = WEEK_DAYS[date.getDay()];
  const month = MONTHS[date.getMonth()];
  const number = date.getDate();
  return `${day}, ${month} ${number}`;
}

/* ============================================================
   Time
============================================================ */
export function formatTime(unixTime) {
  const date = new Date(unixTime * 1000);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

/* ============================================================
   Capitalize
============================================================ */
export function capitalize(text) {
  return text
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/* ============================================================
   Wind
============================================================ */
export function formatWind(speed) {
  return `${speed} m/s`;
}

/* ============================================================
   Pressure
============================================================ */
export function formatPressure(value) {
  return `${value} hPa`;
}

/* ============================================================
   Humidity
============================================================ */
export function formatHumidity(value) {
  return `${value}%`;
}

/* ============================================================
   Visibility
============================================================ */
export function formatVisibility(value) {
  return `${(value / 1000).toFixed(1)} km`;
}

/* ============================================================
   Weather Icon
============================================================ */
export function getWeatherIcon(icon) {
  return `${CONFIG.ICON_URL}/${icon}@4x.png`;
}

/* ============================================================
   Theme
============================================================ */
export function getTheme(weather) {
  return WEATHER_THEMES[weather] || "cloudy";
}

/* ============================================================
   Update Body Theme
============================================================ */
export function applyTheme(theme) {
  document.body.classList.remove(
    "sunny",
    "cloudy",
    "rainy",
    "snowy",
    "storm"
  );
  document.body.classList.add(theme);
}

