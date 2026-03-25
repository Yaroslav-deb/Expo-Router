import { CameraView } from "expo-camera";
import { useRef, useState } from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";
import { useCameraPermissionHook } from "../hooks/cameraPermission";
import { deleteFile, saveFile } from "../utils/fileSystem";

export const CameraBlock = () => {
  const cameraRef = useRef<any>(null);
  const [images, setImages] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const { getPermission } = useCameraPermissionHook();

  const openCamera = async () => {
    const allowed = await getPermission();
    if (allowed) setOpen(true);
    else alert("Немає доступу до камери");
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.7,
      });
      const savedUri = await saveFile(photo.uri);
      setImages((prev) => [...prev, savedUri]);
    }
  };

  const clearImages = async () => {
    images.forEach(async (uri) => await deleteFile(uri));
    setImages([]);
  };

  return (
    <View style={{ marginBottom: 30 }}>
      <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "bold" }}>
        Камера
      </Text>
      <View style={{ gap: 10, marginBottom: 10 }}>
        <Button title="Відкрити камеру" onPress={openCamera} />
        <Button title="Видалити зображення" color="red" onPress={clearImages} />
      </View>

      {open && (
        <View style={{ marginTop: 10 }}>
          <CameraView
            style={{ height: 300, marginBottom: 10 }}
            ref={cameraRef}
          />
          <Button title="Зробити фото" onPress={takePhoto} />
        </View>
      )}

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
