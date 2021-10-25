# weather-app

Proof of Concept (PoC) - Weather App. Node.js &amp; Express API proxy (hide public API keys, caching and rate limiting, caching). Uses the [OpenWeather API](https://openweathermap.org/api)

## Usage

### Install dependencies

```bash
yarn install
```

### Run on http://localhost:5000

```bash
yarn run dev
```

### Add public API info

Rename **.env.example** to **.env** and edit the values

Public API URL: **https://api.openweathermap.org/data/2.5/weather?q={city}&appid={APIkey}**

- API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
- API_KEY_NAME = "appid"
- API_KEY_VALUE = "YOUR_API_KEY"
