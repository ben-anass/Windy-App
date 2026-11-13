/* ============================================================
   Weather Dashboard
   ui.js
============================================================ */

import {
  formatTemperature,
  formatDate,
  formatTime,
  formatHumidity,
  formatPressure,
  formatVisibility,
  formatWind,
  capitalize,
  getWeatherIcon,
  getTheme,
  applyTheme
} from "./utils.js";

/* ============================================================
   DOM ELEMENTS
============================================================ */
const weatherContainer = document.querySelector("#weatherContainer");
const searchInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchButton");
const toastContainer = document.querySelector("#toastContainer");

/* ============================================================
   HELPERS
============================================================ */
function clear() {
  weatherContainer.innerHTML = "";
}

/* ============================================================
   LOADING
============================================================ */
export function renderLoading() {
  clear();
  weatherContainer.innerHTML = `
    <section class="loading fade-in">
      <div class="spinner"></div>
      <h2>Loading Weather...</h2>
      <p>Requesting live data...</p>
    </section>
  `;
}

/* ============================================================
   EMPTY STATE
============================================================ */
export function renderEmptyState() {
  clear();
  weatherContainer.innerHTML = `
    <section class="empty-state fade-in">
      <h2>Welcome 👋</h2>
      <p>Search for any city to display real-time weather information.</p>
    </section>
  `;
}

/* ============================================================
   ERROR STATE
============================================================ */
export function renderError(message) {
  clear();
  weatherContainer.innerHTML = `
    <section class="error-card fade-in">
      <div class="error-icon">⚠️</div>
      <h2>Oops!</h2>
      <p>${message}</p>
    </section>
  `;
}

/* ============================================================
   MAIN WEATHER RENDER
============================================================ */
export function renderWeather(weather) {
  clear();
  applyTheme(getTheme(weather.weather[0].main));

  weatherContainer.innerHTML = `
    <section class="weather-dashboard fade-in">
      <div class="weather-card glass">
        <div class="weather-top">
          <div class="location-info">
            <h2>${weather.name}, ${weather.sys.country}</h2>
            <p>${formatDate(Date.now())}</p>
            <div class="weather-status">
              ${capitalize(weather.weather[0].description)}
            </div>
          </div>
          <div class="weather-icon">
            <img src="${getWeatherIcon(weather.weather[0].icon)}" alt="Weather Icon">
          </div>
        </div>

        <div class="temperature">
          <h1>${Math.round(weather.main.temp)}</h1>
          <span>°C</span>
        </div>

        <p class="weather-description">
          ${capitalize(weather.weather[0].description)}
        </p>
        <p class="feels-like">
          Feels like ${formatTemperature(weather.main.feels_like)}
        </p>

        <div class="weather-details">
          <div class="detail-chip">
            🕒 ${formatTime(weather.dt)}
          </div>
          <div class="detail-chip">
            🌡️ ${formatTemperature(weather.main.temp)}
          </div>
          <div class="detail-chip">
            📍 ${weather.name}
          </div>
        </div>
      </div>

      <div class="metrics-panel">
        <div class="metric-card glass">
          <div class="metric-label">Humidity</div>
          <div class="metric-value">${formatHumidity(weather.main.humidity)}</div>
        </div>
        <div class="metric-card glass">
          <div class="metric-label">Wind</div>
          <div class="metric-value">${formatWind(weather.wind.speed)}</div>
        </div>
        <div class="metric-card glass">
          <div class="metric-label">Pressure</div>
          <div class="metric-value">${formatPressure(weather.main.pressure)}</div>
        </div>
        <div class="metric-card glass">
          <div class="metric-label">Visibility</div>
          <div class="metric-value">${formatVisibility(weather.visibility)}</div>
        </div>
      </div>
    </section>
  `;
}

/* ============================================================
   SEARCH HELPERS
============================================================ */
export function getSearchValue() {
  return searchInput.value.trim();
}

export function clearInput() {
  searchInput.value = "";
}

export function focusSearch() {
  searchInput.focus();
}

export function disableSearch() {
  searchButton.disabled = true;
  searchButton.textContent = "Searching...";
}

export function enableSearch() {
  searchButton.disabled = false;
  searchButton.textContent = "Search";
}

/* ============================================================
   TOAST NOTIFICATION
============================================================ */
export function showToast(message, type = "success") {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type} show`;
  toast.innerHTML = `<strong>${message}</strong>`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
  }, 2500);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}