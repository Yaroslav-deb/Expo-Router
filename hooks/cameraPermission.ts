import { useCameraPermissions } from "expo-camera";

export const useCameraPermissionHook = () => {
  const [permission, requestPermission] = useCameraPermissions();

  const getPermission = async () => {
    if (!permission?.granted) {
      const response = await requestPermission();
      return response.granted;
    }
    return true;
  };

  return { permission, getPermission };
};
