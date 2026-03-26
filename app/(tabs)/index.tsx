import {
  Dimensions,
  FlatList,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { Header } from "../../components/Header";
import { homeStyles } from "../../styles/homeStyle";

const { height } = Dimensions.get("window");

const universalData = Array.from({ length: 6 }).map((_, i) => ({
  id: String(i),
  title: `Елемент списку ${i + 1}`,
  image: `https://picsum.photos/seed/${i + 1}/600/400`,
}));

export default function HomeScreen() {
  const renderItem = ({ item }: any) => (
    <ImageBackground
      source={{ uri: item.image }}
      style={[homeStyles.card, { height: height * 0.2 }]}
      imageStyle={homeStyles.cardImage}
    >
      <View style={homeStyles.overlay}>
        <Text style={homeStyles.cardTitle}>{item.title}</Text>
      </View>
    </ImageBackground>
  );

  return (
    <View style={homeStyles.wrapper}>
      <Header title="Головна" />
      <FlatList
        data={universalData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={homeStyles.listContainer}
      />
    </View>
  );
}
