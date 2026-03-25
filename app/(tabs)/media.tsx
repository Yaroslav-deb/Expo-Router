import { SafeAreaView, ScrollView } from "react-native";
import { CameraBlock } from "../../customComponents/CameraBlock";
import { GalleryBlock } from "../../customComponents/GalleryBlock";

export default function MediaScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20 }}>
        <CameraBlock />
        <GalleryBlock />
      </ScrollView>
    </SafeAreaView>
  );
}
