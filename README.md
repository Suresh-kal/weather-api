# Weather API 🌦️

A public REST API that provides live weather updates for any city.

## Base URL
https://weather-api-fgg6.onrender.com

## Endpoint
GET /api/v1/weather/:city

## Example Request
https://weather-api-fgg6.onrender.com/api/v1/weather/delhi

## Example Response
{
  "success": true,
  "message": "Live weather fetched successfully for Delhi",
  "timestamp": "2026-04-07T10:30:00Z",
  "data": {
    "city": "Delhi",
    "temperature": {
      "value": 34,
      "unit": "celsius"
    },
    "feelsLike": {
      "value": 36,
      "unit": "celsius"
    },
    "humidity": {
      "value": 45,
      "unit": "percent"
    },
    "windSpeed": {
      "value": 3.5,
      "unit": "m/s"
    },
    "pressure": {
      "value": 1012,
      "unit": "hPa"
    },
    "condition": "clear sky"
  }
}

## Parameters
- city → name of the city (example: delhi, mumbai)

## Errors
If the city is invalid:
{
  "success": false,
  "message": "City not found or weather data unavailable"
}
