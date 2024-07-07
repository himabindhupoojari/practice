// import React, { useState, useEffect } from "react";

// const WeatherDashboard = () => {
//   const [weather, setWeather] = useState();
//   const [location, setLocation] = useState("New York");

//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`
//     )
//       .then((response) => response.json())
//       .then((data) => setWeather(data));
//   }, [location]);

//   return (
//     <div>
//       <h1>Weather Dashboard</h1>
//       <input
//         type="text"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         placeholder="Enter location"
//       />
//       {weather && (
//         <div>
//           <h2>{weather.name}</h2>
//           <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
//           <p>Weather: {weather.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherDashboard;

// import React, { useState, useEffect } from "react";
// import "./WeatherDashboard.css"; // Import the CSS file for styling

// const WeatherDashboard = () => {
//   const [weather, setWeather] = useState<any>(null);
//   const [location, setLocation] = useState("New York");

//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fd42a75e5fe33734eae2c04d2ff3e4d5`
//     )
//       .then((response) => response.json())
//       .then((data) => setWeather(data));
//   }, [location]);

//   return (
//     <div className="weather-dashboard">
//       <h1>Weather Dashboard</h1>
//       <input
//         type="text"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         placeholder="Enter location"
//         className="location-input"
//       />
//       {weather && (
//         <div className="weather-info">
//           <h2>{weather.name}</h2>
//           <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
//           <p>Weather: {weather.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherDashboard;

// import React, { useState, useEffect } from "react";
// import "./WeatherDashboard.css"; // Import the CSS file for styling

// const WeatherDashboard = () => {
//   const [weather, setWeather] = useState<any>(null);
//   const [location, setLocation] = useState("London");

//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fd42a75e5fe33734eae2c04d2ff3e4d5`
//     )
//       .then((response) => response.json())
//       .then((data) => setWeather(data));
//   }, [location]);

//   return (
//     <div className="weather-dashboard">
//       <h1>Weather Dashboard</h1>
//       {/* <input
//         type="text"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         placeholder="Enter location"
//         className="location-input"
//       /> */}
//       {weather && (
//         <div className="weather-info">
//           <h2>{weather.name}</h2>
//           <div className="weather-details">
//             <div className="main-info">
//               <p className="temperature">
//                 {Math.round(weather.main.temp - 273.15)}°C
//               </p>
//               <p className="description">{weather.weather[0].description}</p>
//             </div>
//             <div className="extra-info">
//               <p>High: {Math.round(weather.main.temp_max - 273.15)}°C</p>
//               <p>Low: {Math.round(weather.main.temp_min - 273.15)}°C</p>
//               <p>Wind: {weather.wind.speed} m/s</p>
//               <p>Humidity: {weather.main.humidity}%</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherDashboard;

// import React, { useState, useEffect, ChangeEvent } from "react";
// import axios from "axios";
// import "./WeatherDashboard.css"; // Import the CSS file for styling

// interface WeatherData {
//   name: string;
//   dt: number;
//   main: {
//     temp: number;
//     humidity: number;
//   };
//   weather: [
//     {
//       icon: string;
//       description: string;
//     }
//   ];
//   wind: {
//     speed: number;
//   };
//   coord: {
//     lat: number;
//     lon: number;
//   };
// }

// interface ForecastData {
//   dt: number;
//   temp: {
//     day: number;
//   };
//   humidity: number;
//   weather: [
//     {
//       icon: string;
//       description: string;
//     }
//   ];
// }

// const WeatherDashboard: React.FC = () => {
//   const [city, setCity] = useState<string>("");
//   const [searchHistory, setSearchHistory] = useState<string[]>(
//     JSON.parse(localStorage.getItem("search") || "[]")
//   );
//   const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
//   const [forecastData, setForecastData] = useState<ForecastData[]>([]);
//   const APIKey = "fd42a75e5fe33734eae2c04d2ff3e4d5";

//   useEffect(() => {
//     if (searchHistory.length > 0) {
//       getWeather(searchHistory[searchHistory.length - 1]);
//     }
//   }, [searchHistory]);

//   const getWeather = (cityName: string) => {
//     const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`;
//     axios.get(queryURL).then((response) => {
//       setWeatherData(response.data);

//       const { lat, lon } = response.data.coord;
//       const forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${APIKey}`;
//       axios.get(forecastURL).then((forecastResponse) => {
//         setForecastData(forecastResponse.data.daily);
//       });
//     });
//   };

//   const handleSearch = () => {
//     if (city) {
//       getWeather(city);
//       const newSearchHistory = [...searchHistory, city];
//       setSearchHistory(newSearchHistory);
//       localStorage.setItem("search", JSON.stringify(newSearchHistory));
//     }
//   };

//   const handleClearHistory = () => {
//     localStorage.clear();
//     setSearchHistory([]);
//   };

//   const k2f = (K: number): number => {
//     return Math.floor((K - 273.15) * 1.8 + 32);
//   };

//   return (
//     <div className="weather-dashboard">
//       <h1>Weather Dashboard</h1>
//       <div className="search-section">
//         <input
//           type="text"
//           value={city}
//           onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
//           placeholder="Enter city"
//           className="city-input"
//         />
//         <button onClick={handleSearch} className="search-button">
//           Search
//         </button>
//         <button onClick={handleClearHistory} className="clear-button">
//           Clear History
//         </button>
//       </div>
//       <div className="history-section">
//         {searchHistory.map((item, index) => (
//           <input
//             key={index}
//             type="text"
//             value={item}
//             readOnly
//             className="history-item"
//             onClick={() => getWeather(item)}
//           />
//         ))}
//       </div>
//       {weatherData && (
//         <div className="current-weather">
//           <h2>
//             {weatherData.name} ({new Date(weatherData.dt * 1000).toLocaleDateString()})
//           </h2>
//           <img
//             src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
//             alt={weatherData.weather[0].description}
//             className="weather-icon"
//           />
//           <p>Temperature: {k2f(weatherData.main.temp)} &#176;F</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           <p>Wind Speed: {weatherData.wind.speed} MPH</p>
//         </div>
//       )}
//       {forecastData.length > 0 && (
//         <div className="forecast-section">
//           <h2>5-Day Forecast</h2>
//           <div className="forecast-grid">
//             {forecastData.slice(1, 6).map((day, index) => (
//               <div key={index} className="forecast-item">
//                 <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
//                 <img
//                   src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
//                   alt={day.weather[0].description}
//                   className="forecast-icon"
//                 />
//                 <p>Temp: {k2f(day.temp.day)} &#176;F</p>
//                 <p>Humidity: {day.humidity}%</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherDashboard;

import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import "./WeatherDashboard.css"; // Import the CSS file for styling

interface WeatherData {
  name: string;
  dt: number;
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
  wind: {
    speed: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
}

interface ForecastData {
  dt: number;
  temp: {
    day: number;
  };
  humidity: number;
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
}

const WeatherDashboard: React.FC = () => {
  const [city, setCity] = useState<string>("Venkatagiri");
  const [searchHistory, setSearchHistory] = useState<string[]>(
    JSON.parse(localStorage.getItem("search") || "[]")
  );
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const APIKey = "84b79da5e5d7c92085660485702f4ce8";

  useEffect(() => {
    if (searchHistory.length > 0) {
      getWeather(searchHistory[searchHistory.length - 1]);
    }
    else{
      handleSearch();
    }
  }, []);

  const getWeather = (cityName: string) => {
    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`;
    axios
      .get(queryURL)
      .then((response) => {
        setWeatherData(response.data);
        setError(null);

        const { lat, lon } = response.data.coord;
        const forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${APIKey}`;
        axios.get(forecastURL).then((forecastResponse) => {
          setForecastData(forecastResponse.data.daily);
        });
      })
      .catch((err) => {
        setError("City not found. Please check the spelling and try again.");
        console.error(err);
      });
  };

  const handleSearch = () => {
    if (city) {
      getWeather(city);
      const newSearchHistory = [...searchHistory, city];
      setSearchHistory(newSearchHistory);
      localStorage.setItem("search", JSON.stringify(newSearchHistory));
    }
  };

  const handleClearHistory = () => {
    localStorage.clear();
    setSearchHistory([]);
  };

  const k2f = (K: number): number => {
    return Math.floor((K - 273.15) * 1.8 + 32);
  };

  return (
    <div className="weather-dashboard">
      <div className="weather__section">
        <h1>Weather Dashboard</h1>
        <div className="search-section">
          <input
            type="text"
            value={city}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCity(e.target.value)
            }
            placeholder="Enter city"
            className="city-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
          <button onClick={handleClearHistory} className="clear-button">
            Clear History
          </button>
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="history-section">
        {searchHistory.map((item, index) => (
          <input
            key={index}
            type="text"
            value={item}
            readOnly
            className="history-item"
            onClick={() => getWeather(item)}
          />
        ))}
      </div>
      {weatherData && (
        <div className="current-weather">
          <h2>
            {weatherData.name} (
            {new Date(weatherData.dt * 1000).toLocaleDateString()})
          </h2>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
            className="weather-icon"
          />
          <p>Temperature: {k2f(weatherData.main.temp)} &#176;F</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} MPH</p>
        </div>
      )}
      {forecastData.length > 0 && (
        <div className="forecast-section">
          <h2>5-Day Forecast</h2>
          <div className="forecast-grid">
            {forecastData.slice(1, 6).map((day, index) => (
              <div key={index} className="forecast-item">
                <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                  className="forecast-icon"
                />
                <p>Temp: {k2f(day.temp.day)} &#176;F</p>
                <p>Humidity: {day.humidity}%</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
