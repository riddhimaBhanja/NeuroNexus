import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { name, main, weather, wind } = weatherData;
  const temperature = main.temp;
  const description = weather[0].description;
  const icon = weather[0].icon;
  const humidity = main.humidity;
  const windSpeed = wind.speed;

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <div className="flex items-center space-x-2">
          <img
            src={`http://openweathermap.org/img/wn/${icon}.png`}
            alt={description}
            className="w-12 h-12"
          />
          <div>
            <p className="text-xl">{temperature}°C</p>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        <div className="mt-4">
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
