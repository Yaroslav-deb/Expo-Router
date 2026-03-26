import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  formWrapper: { padding: 20, gap: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4a7c59",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
