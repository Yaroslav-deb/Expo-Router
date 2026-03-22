import * as Location from "expo-location";
import { useEffect, useState } from "react";

export const useUserLocation = () => {
  const [location, setLocation] =
    useState<Location.LocationObjectCoords | null>(null);
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Доступ до геолокації заборонено");
        return;
      }

      setPermission(true);
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      setLocation(currentLocation.coords);
    };

    getLocation();
  }, []);

  return { location, permission };
};
