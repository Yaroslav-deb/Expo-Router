import * as ImagePicker from "expo-image-picker";

export const useCameraRollPermissionHook = () => {
  const getPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    return status === "granted";
  };

  return { getPermission };
};
