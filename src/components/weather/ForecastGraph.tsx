'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

type ForecastDay = {
  dt: number;
  temp: { day: number };
};

interface ForecastGraphProps {
  data: ForecastDay[];
}

const ForecastGraph: React.FC<ForecastGraphProps> = ({ data }) => {
  const formattedData = data.map((day) => ({
    date: new Date(day.dt * 1000).toLocaleDateString('en-IN', {
      weekday: 'short',
    }),
    temp: +(day.temp.day - 273.15).toFixed(1), // Kelvin to Celsius
  }));

  return (
    <div className="w-full h-64 pt-4">
      <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formattedData}>
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
  );
};

export default ForecastGraph;
