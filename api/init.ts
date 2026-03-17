import axios from "axios";

const apiUsers = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

const apiWeather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export { apiUsers, apiWeather };

