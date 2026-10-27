# EarthPulse AI

A React + Vite environmental monitoring prototype for NOVEX 2026.

## Features
- Animated dark-green environmental dashboard and clickable modules
- Browser geolocation permission and selectable Maharashtra/Goa locations
- Interactive OpenStreetMap view
- Open-Meteo current weather and forecast feed
- Rain probability, precipitation amount, 12-hour rainfall chart, wind/gust and preliminary risk screening indicators
- Rule-based environmental analysis and guided Eco Assistant
- Community action saving in browser local storage
- Responsive layouts and motion-reduction support

## Run locally
Requirements: Node.js LTS and an internet connection for installing packages and weather/map data.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. On Windows PowerShell, `npm.cmd install` and `npm.cmd run dev` also work.

## Important limitations
- Risk scores are simple weather-based screening signals, not official flood/wind alerts or site-specific flood predictions.
- Eco Assistant and issue analysis use guided/rule-based responses. A real AI model requires a secure server-side API integration.
- Sign-in/register UI is a frontend prototype, not real authentication. Do not enter real passwords.
- Environmental pulse gauges are illustrative/demo estimates, not sensor measurements.
- Browser location requires permission and a secure context (localhost or HTTPS).
