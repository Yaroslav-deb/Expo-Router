import { Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
// import Sensors from "../../customComponents/Sensors"; // гіроскоп
import UserMap from "../../customComponents/UserMap";

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Головна сторінка</Text>
      <UserMap />
    </View>
  );
}
