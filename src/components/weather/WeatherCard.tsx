/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

interface WeatherCardProps {
  city: string;
  data: any;
}

const WeatherCard = ({ city, data }: WeatherCardProps) => {
  const today = data.list[0];
  return (
    <div className="bg-gray-700 dark:bg-gray-900 rounded-xl shadow p-6 w-full">
      <h2 className="text-2xl font-bold mb-2">{city}</h2>
      <p className="text-5xl font-bold">{Math.round(today.main.temp)}°C</p>
      <p className="text-sm text-gray-300 mb-2">Feels like: {Math.round(today.main.feels_like)}°C</p>
      <p className="text-lg font-semibold">{today.weather[0].main}</p>
      <div className="flex flex-wrap gap-4 mt-4 text-sm">
        <p>Humidity: {today.main.humidity}%</p>
        <p>Wind: {today.wind.speed} km/h</p>
        <p>Pressure: {today.main.pressure} hPa</p>
      </div>
    </div>
  );
};

export default WeatherCard;
