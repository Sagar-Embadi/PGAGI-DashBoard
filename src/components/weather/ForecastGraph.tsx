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
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="date" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#60A5FA" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastGraph;
