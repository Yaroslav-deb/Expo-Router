import { useState } from "react";
import {
    ActivityIndicator,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";
import { WeatherService } from "../api/services/WeatherService";
import { globalStyles } from "../styles/global";

export const CurrentWeather = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);
  const [description, setDescription] = useState<string>("");
  const [windSpeed, setWindSpeed] = useState<number | null>(null);

  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeatherData = async () => {
    if (!city.trim()) return;
    setLoading(true);
    try {
      const data = await WeatherService.getWeather(city);
      setTemperature(data.temp);
      setHumidity(data.humidity);
      setDescription(data.description);
      setWindSpeed(data.windSpeed);
    } catch (error) {
      console.error("Помилка при завантаженні даних погоди", error);
      setDescription("Місто не знайдено або помилка мережі");
      setTemperature(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ width: "100%", paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        Введіть місто (напр. Chernivtsi):
      </Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Назва міста..."
        value={city}
        onChangeText={setCity}
      />

      <Pressable style={globalStyles.button} onPress={fetchWeatherData}>
        <Text style={globalStyles.buttonText}>Дізнатися погоду</Text>
      </Pressable>

      {loading && (
        <ActivityIndicator
          size="large"
          color="#007AFF"
          style={{ margin: 20 }}
        />
      )}

      {!loading && temperature !== null && (
        <View
          style={{
            marginTop: 20,
            padding: 20,
            backgroundColor: "#fff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#ddd",
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 8 }}>
            Температура: {temperature}°C
          </Text>
          <Text style={{ fontSize: 18, marginBottom: 8 }}>
            Вологість: {humidity}%
          </Text>
          <Text style={{ fontSize: 18, marginBottom: 8 }}>
            Вітер: {windSpeed} м/с
          </Text>
          <Text style={{ fontSize: 18, textTransform: "capitalize" }}>
            Опис: {description}
          </Text>
        </View>
      )}
      {!loading && temperature === null && description !== "" && (
        <Text style={{ marginTop: 20, color: "red", textAlign: "center" }}>
          {description}
        </Text>
      )}
    </View>
  );
};
