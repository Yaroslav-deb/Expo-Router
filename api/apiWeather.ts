import { apiWeather } from "./init";

export async function getWeatherByCity(city: string) {
  const API_KEY = "5c269062e298b2f936f83b29486795cc"; // Твій ключ
  const response = await apiWeather.get(
    `/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ua`,
  );
  return response.data;
}
