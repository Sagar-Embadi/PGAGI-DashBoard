/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { fetchForecast, fetchWeather } from '@/services/weatherService';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

const WeatherSearchCard = () => {
  const [search, setSearch] = useState("Delhi");
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!search.trim()) return;
    try {
      setError('');
      const weatherData = await fetchWeather(search.trim());
      const forecastData = await fetchForecast(weatherData.coord.lat, weatherData.coord.lon);
      
      if (!weatherData || !weatherData.main) throw new Error('Not found');
      setWeather(weatherData);
      setForecast(forecastData.list); // list is the array of days
    } catch {
      setError('City not found');
      setWeather(null);
      setForecast([]);
    }
  };
  useEffect(() => {
    handleSearch()
  },[])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  const formattedForecast = forecast.map(day => ({
    date: new Date(day.dt * 1000).toLocaleDateString('en-IN', { weekday: 'short' }),
    temp: +(day.temp.day - 273.15).toFixed(1), // Kelvin to Celsius
  }));

  return (
    <div className="w-full min-h-96 bg-white text-black dark:bg-[#1F2937] dark:text-white rounded-2xl p-4 flex flex-col items-center justify-start gap-4 shadow-md">
      <div className='w-full flex items-center justify-between'>
        {weather && (
        <div className="text-center mt-2 w-1/2">
          <h2 className="text-xl font-semibold">{weather.name}</h2>
          <div className='flex items-center justify-center'>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="icon"
            className="mx-auto"
          />
          <div>
          <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
          <p className="capitalize text-sm">{weather.weather[0].description}</p>

          </div>
          </div>

        </div>
      )}
      <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter city"
        className="w-full px-3 py-2 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none bg-white text-dark-800 border border-gray-300 dark:border-gray-600"
      />
      {weather && (
        <div className="mt-3 flex gap-3 justify-around">
            <div>
              <p className="text-gray-400">Feels Like</p>
              <p>{Math.round(weather.main.feels_like)}°C</p>
            </div>
            <div>
              <p className="text-gray-400">Humidity</p>
              <p>{weather.main.humidity}%</p>
            </div>
            <div>
              <p className="text-gray-400">Wind</p>
              <p>{Math.round(weather.wind.speed)} km/h</p>
            </div>
          </div>
      )}
      </div>
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}


      {/* Forecast Graph */}
      {forecast.length > 0 && (
        <div className="w-full h-64 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formattedForecast}>
              <CartesianGrid strokeDasharray="3 2" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis
                domain={['auto', 'auto']}
                stroke="#9CA3AF"
                tickFormatter={(value) => `${value}°C`}
                />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white dark:bg-gray-700 text-black dark:text-white p-2 rounded text-sm shadow border border-gray-300 dark:border-gray-600">
                        <p>Day: {payload[0].payload.date}</p>
                        <p>Temp: {payload[0].payload.temp}°C</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line type="monotone" dataKey="temp" stroke="#60A5FA" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default WeatherSearchCard;
