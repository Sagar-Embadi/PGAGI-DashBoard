/* eslint-disable @typescript-eslint/no-explicit-any */
interface AirConditionProps {
  data: any;
}

const AirCondition = ({ data }: AirConditionProps) => (
  <div className="flex flex-wrap gap-4">
    <div className="bg-gray-700 text-white p-6 rounded-2xl shadow-lg flex-grow  hover:bg-gray-600">
      <p className="text-title-sm">Real Feel</p>
      <p className="text-6xl mt-3">{Math.round(data.main.feels_like)}°</p>
    </div>
    <div className="bg-gray-700 text-white p-6 rounded-2xl shadow-lg flex-grow  hover:bg-gray-600">
      <p className="text-title-sm">Wind</p>
      <p className="text-6xl mt-3">{Math.round(data.wind.speed)} KM/H</p>
    </div>
    <div className="bg-gray-700 text-white p-6 rounded-2xl shadow-lg  flex-grow hover:bg-gray-600">
      <p className="text-title-sm">Chance of Rain</p>
      <p className="text-6xl mt-3">{data.rain?.['1h'] || 0}%</p>
    </div>
    <div className="bg-gray-700 text-white p-6 rounded-2xl shadow-lg flex-grow hover:bg-gray-600">
      <p className="text-title-sm">UV Index</p>
      <p className="text-6xl mt-3">3</p> {/* Placeholder - real value from OneCall API */}
    </div>
  </div>
);

export default AirCondition;
