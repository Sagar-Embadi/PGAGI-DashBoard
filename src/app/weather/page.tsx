// components/WeatherDashboard.tsx
'use client';

import { useState, useEffect } from 'react';
import { fetchWeather, fetchForecast } from '@/services/weatherService';
import WeatherOverview from '@/components/weather/WeatherOverview';
// import HourlyForecast from '@/components/weather/HourlyForecast';
// import WeeklyForecast from '@/components/weather/WeeklyForecast';
import AirCondition from '@/components/weather/AirCondition'; 
import ForecastGraph from '@/components/weather/ForecastGraph';

const WeatherDashboard = () => {
  const [city, setCity] = useState('Delhi');
  const [search, setSearch] = useState('Delhi');
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadWeather = async () => {
    try {
      setLoading(true);
      setError('');
      const weatherData = await fetchWeather(city);
      if (!weatherData.coord) throw new Error('Invalid city');
      const forecastData = await fetchForecast(weatherData.coord.lat, weatherData.coord.lon);
      console.log(forecastData);
      if (!weatherData || !weatherData.main) throw new Error('Not found');
      setWeather(weatherData);
      setForecast(forecastData.list);
    } catch (err: any) {
      setError('Could not fetch weather data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather();
    
  }, [city]);

  return (
    <div className="flex">
      <main className="p-6 flex flex-col gap-6 w-full text-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-600 text-white px-4 py-2 rounded-md w-64"
            placeholder="Search for cities"
          />
          <button
            onClick={() => setCity(search)}
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-400">{error}</p>}

        {weather && forecast && (
          <>
            <WeatherOverview data={weather} />
            <AirCondition data={weather} />
          </>
        )}
      </main>
      <div>
        <div className="w-96 h-full bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Forecast</h2>
          {forecast && (
            <ForecastGraph data={forecast} />
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;

// 'use client';

// import { useEffect, useState } from 'react';
// import SearchBar from '@/components/weather/SearchBar';
// import WeatherCard from '@/components/weather/WeatherCard';
// import ForecastCards from '@/components/weather/ForecastCards';
// import HourlyForecast from '@/components/weather/HourlyForecast';


// const Page = () => {
//   const [city, setCity] = useState('Athens');
//   const [weatherData, setWeatherData] = useState<any>(null);

//   const fetchWeather = async (city: string) => {
//     // const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    
//     const res = fetchWeather(city);
//     console.log(res);
    
//     setWeatherData(res);
//   };

//   useEffect(() => {
//     fetchWeather(city);
//   }, []);

//   const handleSearch = (query: string) => {
//     setCity(query);
//     fetchWeather(query);
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white p-4">
//       <div className="flex justify-between items-center mb-4">
//         <SearchBar onSearch={handleSearch} />
//       </div>

//       {weatherData && (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <WeatherCard city={city} data={weatherData} />
//             <ForecastCards data={weatherData} />
//           </div>
//           <HourlyForecast data={weatherData} />
//         </>
//       )}
//     </main>
//   );
// };

// export default Page;
