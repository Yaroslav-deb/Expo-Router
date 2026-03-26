import { StyleSheet } from "react-native";

export const profileStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  profileInfo: { alignItems: "center", marginVertical: 30 },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: { fontSize: 22, fontWeight: "bold", color: "#333" },
  email: { fontSize: 16, color: "#666", marginTop: 5 },
  menu: { paddingHorizontal: 20, gap: 15 },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  btnText: { fontSize: 16, color: "#333" },
});
