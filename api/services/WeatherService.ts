import { getWeatherByCity } from "../apiWeather";

export class WeatherService {
  static async getWeather(city: string) {
    const data = await getWeatherByCity(city);

    return {
      temp: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      windSpeed: data.wind.speed,
    };
  }
}
