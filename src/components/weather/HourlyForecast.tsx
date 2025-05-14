interface HourlyForecastProps {
  data: any[];
}

const HourlyForecast = ({ data }: HourlyForecastProps) => (
  <div className="bg-[#111827] text-white p-6 rounded-2xl shadow-lg">
    <div className="grid grid-cols-6 gap-4">
      {data.map((hour, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <p className="text-sm">{new Date(hour.dt * 1000).getHours()}:00</p>
          <img
            src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
            alt="icon"
            className="w-10 h-10"
          />
          <p className="text-xl">{Math.round(hour.temp)}°</p>
        </div>
      ))}
    </div>
  </div>
);

export default HourlyForecast;