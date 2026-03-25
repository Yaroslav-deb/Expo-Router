import { File, Paths } from "expo-file-system/next";

export const saveFile = async (uri: string) => {
  const originalName = uri.split("/").pop() ?? "file";
  const fileName = `${Date.now()}_${originalName}`;

  const destination = new File(Paths.cache, fileName);
  const source = new File(uri);

  await source.copy(destination);
  return destination.uri;
};

export const deleteFile = async (uri: string) => {
  try {
    const file = new File(uri);
    if (file.exists) {
      await file.delete();
    }
  } catch (error) {
    console.error("Помилка під час видалення файлу:", error);
  }
};
