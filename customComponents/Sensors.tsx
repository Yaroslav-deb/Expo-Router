import { Gyroscope } from "expo-sensors";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sensors() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Gyroscope.setUpdateInterval(300);
    const subscription = Gyroscope.addListener((sensorData) => {
      setData(sensorData);
    });
    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Дані гіроскопа</Text>
      <Text style={styles.text}>X: {data.x.toFixed(2)}</Text>
      <Text style={styles.text}>Y: {data.y.toFixed(2)}</Text>
      <Text style={styles.text}>Z: {data.z.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 20,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  text: { fontSize: 18, textAlign: "center", marginVertical: 5 },
});
