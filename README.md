# Windy-App
<div align="center">

# 🌦️ Weather Dashboard (`Windy-App`)

**A modern, glassmorphic real-time weather dashboard engineered with modular Vanilla JavaScript (ES6+), reactive CSS theming, and resilient Fetch API architecture.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![OpenWeather API](https://img.shields.io/badge/OpenWeather_API-EB6E4B?style=for-the-badge&logo=icloud&logoColor=white)](https://openweathermap.org/api)
[![License: MIT](https://img.shields.io/badge/License-MIT-27D980?style=for-the-badge)](LICENSE)

[Features](#-key-features) • [Architecture](#-architecture--module-design) • [Installation](#-getting-started) • [Roadmap](#-roadmap)

</div>

---

## 📸 Preview

> *Add your application screenshots inside an `assets/` folder and update the links below.*

| Desktop View (Dynamic Weather Theme) | Mobile Responsive View |
| :---: | :---: |
| ![Desktop Preview](./assets/preview-desktop.png) | ![Mobile Preview](./assets/preview-mobile.png) |

---

## ✨ Key Features

- **⚡ Real-Time Global Weather Lookup:** Fetches live meteorological data for any city worldwide using `Fetch API` and `Async/Await`.
- **🎨 Weather-Reactive Dynamic Themes:** Automatically shifts ambient background radial gradients and animated aurora lighting to match live conditions (`Sunny`, `Cloudy`, `Rainy`, `Snowy`, `Storm`).
- **📊 Comprehensive Meteorological Metrics:** Displays current temperature, "feels like" index, humidity percentage, wind speed (`m/s`), atmospheric pressure (`hPa`), visibility (`km`), and localized timestamps.
- **🛡️ Fault-Tolerant Networking:**
  - Enforces a strict `10s` request timeout using `AbortController` to prevent hanging UI states.
  - Handles granular HTTP status codes (`400`, `401`, `404`, `429`, `500`) with human-readable error cards.
  - Validates incoming API JSON payloads before rendering to prevent runtime exceptions.
- **💎 Apple-Inspired Glassmorphism UI:** Frosted-glass cards (`backdrop-filter: blur`), smooth micro-interactions, button ripple effects, loading spinners, and non-intrusive toast notifications.
- **⌨️ Accessibility & Keyboard Navigation:** Press `/` anywhere on the screen to focus the search input immediately, alongside full `:focus-visible` outlines and `prefers-reduced-motion` support.

---

## 🏗️ Architecture & Module Design

The codebase follows a strict **Separation of Concerns (SoC)** pattern using native ES6 Modules:

```text
Application-m-t-o/
├── css/
│   └── style.css       # Design tokens (:root), glassmorphism, aurora animations & media queries
├── js/
│   ├── config.js       # Environment constants, API endpoints, calendar arrays & theme mappings
│   ├── api.js          # HTTP client, AbortController timeout wrapper, status & schema validation
│   ├── utils.js        # Pure formatting functions (units, Unix timestamps, capitalization, themes)
│   ├── ui.js           # DOM rendering engine (weather, loading, empty, error states & toasts)
│   └── app.js          # Application orchestrator, state lifecycle & event listeners
├── index.html          # Semantic HTML5 entry point
└── README.md           # Project documentation
```

| Module | Responsibility |
| :--- | :--- |
| **`config.js`** | Centralizes API endpoints, default city (`London`), metric units, timeout threshold, and weather-to-theme mappings. |
| **`api.js`** | Builds query parameters safely via `URLSearchParams`, manages request aborts, and throws descriptive errors. |
| **`utils.js`** | Contains stateless helper functions for temperature rounding, Unix-to-local time conversion, and `<body>` theme class switching. |
| **`ui.js`** | Isolates all DOM mutations and HTML template rendering (`renderWeather`, `renderLoading`, `renderError`, `showToast`). |
| **`app.js`** | Connects user interactions (form submission, keyboard shortcuts) with the API and UI layers. |

---

## 🚀 Getting Started

### Prerequisites

- A free API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
- A local development server (required because browsers block `type="module"` imports over the `file://` protocol due to CORS policies).

### 1. Clone the Repository

```bash
git clone https://github.com/ben-anass/Windy-App
cd Windy-App
```

### 2. Configure Your API Key

Open `js/config.js` and insert your OpenWeatherMap API key:

```javascript
export const CONFIG = {
  API_KEY: "d276c62571a2fd3dfee7df0e723a0270Y",
  BASE_URL: "https://api.openweathermap.org/data/2.5",
  WEATHER_ENDPOINT: "/weather",
  ICON_URL: "https://openweathermap.org/img/wn",
  DEFAULT_CITY: "London",
  DEFAULT_UNITS: "metric",
  REQUEST_TIMEOUT: 10000
};
```

> **🔒 Security Note:** Never commit your personal API key to a public repository. Before pushing changes to GitHub, replace your key with a placeholder or add `js/config.js` to `.gitignore`.

### 3. Run Locally

Choose any of the following methods to serve the app locally:

- **VS Code Live Server:** Right-click `index.html` $\rightarrow$ **Open with Live Server**.
- **Python 3:**
  ```bash
  python3 -m http.server 8000
  # Open http://localhost:8000
  ```
- **Node.js (`serve`):**
  ```bash
  npx serve .
  ```

---

## 🗺️ Roadmap

- [x] Real-time current weather search & validation
- [x] Dynamic weather-based background themes & animations
- [x] Responsive design (Desktop, Tablet, Mobile)
- [ ] Persist recent searches in `localStorage` *(CSS `.search-history` styles ready)*
- [ ] Integrate 24-hour & 5-day forecast endpoints *(CSS `.hourly-forecast` & `.daily-forecast` styles ready)*
- [ ] Add Sunrise / Sunset cards *(CSS `.sun-grid` styles ready)*
- [ ] Unit switcher (`°C` Metric / `°F` Imperial) & Browser Geolocation detection

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.