import { useState } from 'react';
import { View, ScrollView, Image, TextInput, Pressable, Text, Alert } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSave = () => {
    Alert.alert('Інформація', `Користувач: ${name}\nСтатус: ${lastName}`);
  };

  const handleClear = () => {
    setName('');
    setLastName('');
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={globalStyles.container}>
        <Image 
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
          style={globalStyles.avatar} 
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Ім'я"
          placeholderTextColor="#666"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Прізвище"
          placeholderTextColor="#666"
          value={lastName}
          onChangeText={setLastName}
        />
        <View style={globalStyles.rowContainer}>
          <Pressable style={[globalStyles.button, globalStyles.primaryButton]} onPress={handleSave}>
            <Text style={globalStyles.buttonText}>Зберегти</Text>
          </Pressable>
          <Pressable style={[globalStyles.button, globalStyles.redBtn]} onPress={handleClear}>
            <Text style={globalStyles.buttonText}>Очистити</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}