/* ============================================================
   Weather Dashboard
   JavaScript Master Course 2026
   api.js
============================================================ */

import { CONFIG } from "./config.js";

/* ============================================================
   Build URL
============================================================ */
function buildWeatherURL(city) {
  const params = new URLSearchParams({
    q: city,
    units: CONFIG.DEFAULT_UNITS,
    appid: CONFIG.API_KEY
  });
  return `${CONFIG.BASE_URL}${CONFIG.WEATHER_ENDPOINT}?${params.toString()}`;
}

/* ============================================================
   Timeout Controller
============================================================ */
function createTimeoutController() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, CONFIG.REQUEST_TIMEOUT);

  return {
    controller,
    timeoutId
  };
}

/* ============================================================
   Handle HTTP Errors
============================================================ */
function handleHttpError(response) {
  switch (response.status) {
    case 400:
      throw new Error("Invalid request.");
    case 401:
      throw new Error("Invalid API Key. Please check your configuration.");
    case 404:
      throw new Error("City not found. Please try another location.");
    case 429:
      throw new Error("API rate limit exceeded. Please try again later.");
    case 500:
      throw new Error("Weather service is temporarily unavailable.");
    default:
      throw new Error(`Request failed (${response.status})`);
  }
}

/* ============================================================
   Validate Weather Object
============================================================ */
function validateWeatherData(data) {
  if (!data) {
    throw new Error("No data returned.");
  }
  if (!data.main) {
    throw new Error("Temperature data missing.");
  }
  if (!data.weather) {
    throw new Error("Weather description missing.");
  }
  if (!data.wind) {
    throw new Error("Wind information missing.");
  }
  return true;
}

/* ============================================================
   Fetch Weather
============================================================ */
export async function getWeather(city) {
  const { controller, timeoutId } = createTimeoutController();

  try {
    const response = await fetch(buildWeatherURL(city), {
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      handleHttpError(response);
    }

    const weather = await response.json();
    validateWeatherData(weather);

    return weather;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out. Please check your connection.");
    }
    throw error;
  }
}

