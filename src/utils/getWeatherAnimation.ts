export const getWeatherAnimation = (description: string): string => {
  const desc = description.toLowerCase();

  if (desc.includes('cloud')) return '/lottie/cloudy.json';
  if (desc.includes('rain')) return '/lottie/rain.json';
  if (desc.includes('snow')) return '/lottie/snow.json';
  if (desc.includes('clear')) return '/lottie/sunny.json';

  // Default fallback
  return '/lottie/sunny.json';
};
