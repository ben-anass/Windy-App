/* ============================================================
   Weather Dashboard
   JavaScript Master Course 2026
   app.js
============================================================ */

import { CONFIG } from "./config.js";
import { getWeather } from "./api.js";
import {
  renderLoading,
  renderWeather,
  renderError,
  renderEmptyState,
  getSearchValue,
  clearInput,
  disableSearch,
  enableSearch,
  focusSearch,
  showToast
} from "./ui.js";

/* ============================================================
   DOM ELEMENTS
============================================================ */
const searchForm = document.querySelector("#searchForm");
const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#cityInput");

/* ============================================================
   Search Weather
============================================================ */
async function searchWeather(city) {
  disableSearch();
  renderLoading();

  try {
    const weather = await getWeather(city);
    renderWeather(weather);
    showToast(`Weather loaded for ${weather.name}`, "success");
  } catch (error) {
    renderError(error.message);
    showToast(error.message, "error");
  } finally {
    enableSearch();
  }
}

/* ============================================================
   Form Submit
============================================================ */
async function handleSubmit(event) {
  event.preventDefault();
  const city = getSearchValue();

  if (!city) {
    showToast("Please enter a city.", "warning");
    focusSearch();
    return;
  }

  await searchWeather(city);
  clearInput();
}

/* ============================================================
   Keyboard Shortcut (Press "/" to focus search)
============================================================ */
function handleKeyboard(event) {
  if (
    event.key === "/" &&
    document.activeElement !== searchInput
  ) {
    event.preventDefault();
    focusSearch();
  }
}

/* ============================================================
   Load Default City
============================================================ */
async function loadDefaultWeather() {
  await searchWeather(CONFIG.DEFAULT_CITY);
}

/* ============================================================
   Event Listeners
============================================================ */
function registerEvents() {
  searchForm.addEventListener("submit", handleSubmit);
  document.addEventListener("keydown", handleKeyboard);
}

/* ============================================================
   App Init
============================================================ */
async function init() {
  renderEmptyState();
  registerEvents();
  await loadDefaultWeather();
}

/* ============================================================
   Start App
============================================================ */
init();
