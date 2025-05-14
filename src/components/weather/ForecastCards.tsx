/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

interface ForecastCardsProps {
  data: any;
}

const ForecastCards = ({ data }: ForecastCardsProps) => {
  const dailyData = data.list.filter((_: any, idx: number) => idx % 8 === 0);

  return (
    <div className="bg-gray-700 dark:bg-gray-900 rounded-xl shadow p-6 w-full">
      <h2 className="text-xl font-semibold mb-4">5 Days Forecast:</h2>
      <div className="space-y-2">
        {dailyData.slice(1, 6).map((item: any, idx: number) => {
          const date = new Date(item.dt_txt);
          return (
            <div key={idx} className="flex justify-between items-center">
              <span>{Math.round(item.main.temp)}°C</span>
              <span>{days[date.getDay()]}, {date.getDate()} {date.toLocaleString('default', { month: 'short' })}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastCards;
