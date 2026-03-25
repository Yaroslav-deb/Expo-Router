import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";
import { useCameraRollPermissionHook } from "../hooks/camerarollPermission";
import { deleteFile, saveFile } from "../utils/fileSystem";

export const GalleryBlock = () => {
  const [images, setImages] = useState<string[]>([]);
  const { getPermission } = useCameraRollPermissionHook();

  const pickImage = async () => {
    const allowed = await getPermission();
    if (!allowed) {
      alert("Немає доступу до галереї");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.8,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const savedUri = await saveFile(uri);
      setImages((prev) => [...prev, savedUri]);
    }
  };

  const clearImages = async () => {
    images.forEach(async (uri) => await deleteFile(uri));
    setImages([]);
  };

  return (
    <View>
      <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "bold" }}>
        Галерея
      </Text>
      <View style={{ gap: 10, marginBottom: 10 }}>
        <Button title="Обрати зображення" onPress={pickImage} />
        <Button title="Видалити зображення" color="red" onPress={clearImages} />
      </View>

      <ScrollView horizontal style={{ marginTop: 10 }}>
        {images.map((img, i) => (
          <Image
            key={i}
            source={{ uri: img }}
            style={{
              width: 100,
              height: 100,
              marginRight: 10,
              borderRadius: 10,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};
