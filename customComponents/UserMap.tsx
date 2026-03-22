import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useUserLocation } from "../hooks/useUserLocation";

export default function UserMap() {
  const { location, permission } = useUserLocation();

  if (!permission) {
    return (
      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Потрібен дозвіл на використання геолокації
      </Text>
    );
  }

  if (!location) {
    return (
      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Отримання координат...
      </Text>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        borderRadius: 15,
        overflow: "hidden",
        marginVertical: 20,
      }}
    >
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: location.latitude + 0.0003,
            longitude: location.longitude,
          }}
          title="Ваше місцезнаходження"
        />
      </MapView>
    </View>
  );
}
