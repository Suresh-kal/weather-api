const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
app.get("/api/v1/weather/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`,
    );
    const data = response.data;
    res.json({
      success: true,
      timestamp: new Date().toISOString(),
      data: {
        city: data.name,
        temparature: {
          value: data.main.temp,
          unit: "celsius",
        },
        feelsLike: {
          value: data.main.feels_like,
          unit: "celsius",
        },
        humidity: {
          value: data.main.humidity,
          unit: "percent",
        },
        windSpeed: {
          value: data.wind.speed,
          unit: "m/s",
        },
        pressure: {
          value: data.main.pressure,
          unit: "hPa",
        },
        weather_status: data.weather[0].description,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "City not found or weather data unavailable",
    });
  }
});
app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
