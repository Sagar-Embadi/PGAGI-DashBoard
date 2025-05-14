const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

export async function fetchWeather(city: string) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  return res.json();
}

export async function fetchForecast(lat: number, lon: number) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=11e0794ce33ac94c5f74e735ea886df9`);
  return res.json();
}