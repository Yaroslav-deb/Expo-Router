import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20, justifyContent: 'center' },
  titleText: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15, fontSize: 16},
  image: { width: '100%', height: 200, borderRadius: 15, marginBottom: 20 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  
  
  redBtn: { backgroundColor: 'red' },
  avatar: { width: 120, height: 120, borderRadius: 60, alignSelf: 'center', marginBottom: 20, borderWidth: 2, borderColor: '#007AFF' },
  rowContainer: { flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginTop: 10 },
  secondaryButton: { backgroundColor: '#ff3b30', flex: 1 },
  primaryButton: { flex: 1 }
});