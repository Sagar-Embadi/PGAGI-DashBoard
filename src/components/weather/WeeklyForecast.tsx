interface WeeklyForecastProps {
  data: any[];
}

const WeeklyForecast = ({ data }: WeeklyForecastProps) => (
  <div className="bg-[#111827] text-white p-6 rounded-2xl shadow-lg">
    <h2 className="text-xl mb-4">7-DAY FORECAST</h2>
    <div className="flex flex-col gap-2">
      {data.map((day, idx) => (
        <div key={idx} className="flex justify-between items-center">
          <p>{new Date(day.dt * 1000).toLocaleDateString(undefined, { weekday: 'long' })}</p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt="icon"
            className="w-8 h-8"
          />
          <p>{Math.round(day.temp.max)}°/{Math.round(day.temp.min)}°</p>
        </div>
      ))}
    </div>
  </div>
);

export default WeeklyForecast;