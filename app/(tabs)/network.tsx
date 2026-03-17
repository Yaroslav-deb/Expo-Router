import { SafeAreaView, Text } from "react-native";
import { CurrentWeather } from "../../customComponents/CurrentWeather";
import { globalStyles } from "../../styles/global";
// import { UserProfile } from '../../customComponents/UserProfile';

export default function NetworkScreen() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Погода OpenWeather</Text>

      {}
      <CurrentWeather />
    </SafeAreaView>
  );
}
