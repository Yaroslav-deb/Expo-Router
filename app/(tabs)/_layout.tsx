import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#007AFF",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Головна" }} />
      <Tabs.Screen name="media" options={{ title: "Панченко - Медіа" }} />
      <Tabs.Screen name="network" options={{ title: "Панченко - Мережа" }} />
      <Tabs.Screen name="profile" options={{ title: "Панченко - Профіль" }} />
      <Tabs.Screen name="list" options={{ title: "Панченко - Список" }} />
    </Tabs>
  );
}
