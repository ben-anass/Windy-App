/* ============================================================
   Weather Dashboard
   JavaScript Master Course 2026
   config.js
============================================================ */

export const CONFIG = {
  API_KEY: "d276c62571a2fd3dfee7df0e723a0270",
  BASE_URL: "https://api.openweathermap.org/data/2.5",
  WEATHER_ENDPOINT: "/weather",
  ICON_URL: "https://openweathermap.org/img/wn",
  DEFAULT_CITY: "London",
  DEFAULT_UNITS: "metric",
  REQUEST_TIMEOUT: 10000
};

export const WEATHER_THEMES = {
  Clear: "sunny",
  Clouds: "cloudy",
  Rain: "rainy",
  Drizzle: "rainy",
  Thunderstorm: "storm",
  Snow: "snowy",
  Mist: "cloudy",
  Fog: "cloudy",
  Haze: "cloudy",
  Smoke: "cloudy"
};

export const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
