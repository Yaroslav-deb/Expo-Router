import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Header } from "../../components/Header";
import { aboutStyles } from "../../styles/aboutStyle";

export default function AboutScreen() {
  return (
    <View style={aboutStyles.container}>
      <Header title="Про компанію" />

      <View style={aboutStyles.infoBlock}>
        <Text style={aboutStyles.title}>Hike Together ©</Text>
        <Text style={aboutStyles.text}>Kyiv, Rymarska 12 st</Text>
        <Text style={aboutStyles.text}>Телефон: +380 50 567 07 74</Text>
        <Text style={aboutStyles.text}>Email: info@hiketogether.com</Text>
      </View>

      <MapView
        style={aboutStyles.map}
        initialRegion={{
          latitude: 50.4501,
          longitude: 30.5234,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: 50.4501, longitude: 30.5234 }} />
      </MapView>
    </View>
  );
}
