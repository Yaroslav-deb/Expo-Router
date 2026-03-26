import { Image, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { profileStyles } from "../../styles/profileStyle";

export default function ProfileScreen() {
  return (
    <View style={profileStyles.container}>
      <Header title="Мій профіль" />

      <View style={profileStyles.profileInfo}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={profileStyles.avatar}
        />
        <Text style={profileStyles.name}>Панчекно Ярослав</Text>
        <Text style={profileStyles.email}>introvergest@gmail.com</Text>
      </View>

      <View style={profileStyles.menu}>
        <TouchableOpacity style={profileStyles.btn}>
          <Text style={profileStyles.btnText}>Змінити особисті дані</Text>
          <Text>{">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={profileStyles.btn}>
          <Text style={profileStyles.btnText}>Підтримка</Text>
          <Text>{">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={profileStyles.btn}>
          <Text style={profileStyles.btnText}>Вихід з акаунту</Text>
          <Text>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
