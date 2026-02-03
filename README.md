# Weather App 

A simple weather application built with **JavaScript** that fetches real-time weather data using the freeCodeCamp Weather API.  
This project is part of the **JavaScript Algorithms and Data Structures** certification on freeCodeCamp.

##  Features

- Fetches live weather data by city
- Displays:
  - Current temperature
  - Feels-like temperature
  - Humidity
  - Wind speed and gusts
  - Weather condition and icon
- Handles missing or unavailable data gracefully
- Uses asynchronous JavaScript (`async / await`)

##  Technologies Used

- JavaScript (ES6+)
- Fetch API
- HTML
- CSS (layout and styling)

##  How It Works

1. The user selects a city from a dropdown.
2. When the button is clicked:
   - The app fetches data from the freeCodeCamp Weather API.
   - The response is processed and displayed dynamically in the UI.
3. If the request fails or data is missing, fallback values are shown.

##  API Used

- **freeCodeCamp Weather Proxy API**  
https://weather-proxy.freecodecamp.rocks/api/city/{city}


##  What I Learned

- Working with asynchronous JavaScript and `fetch`
- Handling API responses and errors
- Updating the DOM dynamically
- Writing cleaner, more defensive JavaScript code
