import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#f5f5f5" },
  listContainer: { padding: 16, gap: 16 },
  card: {
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  cardImage: { borderRadius: 12 },
  overlay: { backgroundColor: "rgba(0,0,0,0.4)", padding: 15 },
  cardTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
