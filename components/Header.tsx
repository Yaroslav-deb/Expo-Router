import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { headerStyles } from "../styles/headerStyle";

export const Header = ({ title }: { title: string }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[headerStyles.container, { paddingTop: insets.top }]}>
      <Text style={headerStyles.title}>{title}</Text>
    </View>
  );
};
