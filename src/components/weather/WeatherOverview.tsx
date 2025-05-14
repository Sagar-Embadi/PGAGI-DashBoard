interface WeatherOverviewProps {
  data: any;
}

const WeatherOverview = ({ data }: WeatherOverviewProps) => (
  <div className="bg-gray-700 text-white p-6 rounded-2xl shadow-lg flex items-center justify-around">
    <div>
        <h1 className="text-6xl font-bold">{data.name}</h1>
    <p className="text-2xl mt-3">Chance of rain: {data.rain?.['1h'] || 0}%</p>
    </div>
    <div className="text-8xl font-bold mt-4">{Math.round(data.main.temp)}°</div>
      <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
  </div>
);

export default WeatherOverview;