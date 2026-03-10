import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, TextInput, Pressable, Text, Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import { globalStyles } from '../../styles/global';

import { File, Paths } from 'expo-file-system/next';

const profileFile = new File(Paths.document, 'user_profile.json');

async function loadProfileData() {
  if (!profileFile.exists) return null;
  try {
    const content = await profileFile.text();
    return JSON.parse(content);
  } catch (e) {
    await profileFile.delete();
    return null;
  }
}

async function saveProfileData(name: string, lastName: string) {
  await profileFile.write(JSON.stringify({ name, lastName }));
}

async function deleteProfileData() {
  if (profileFile.exists) {
    await profileFile.delete();
  }
}

const AnimatedFields = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const isFocused = useIsFocused();

  const inputOpacity_1 = useSharedValue(0);
  const inputTranslateY_1 = useSharedValue(20);
  const inputOpacity_2 = useSharedValue(0);
  const inputTranslateY_2 = useSharedValue(20);

  const animatedFieldsStyle_1 = useAnimatedStyle(() => ({
    opacity: inputOpacity_1.value,
    transform: [{ translateY: inputTranslateY_1.value }],
  }));

  const animatedFieldsStyle_2 = useAnimatedStyle(() => ({
    opacity: inputOpacity_2.value,
    transform: [{ translateY: inputTranslateY_2.value }],
  }));

  useEffect(() => {
    if (!isFocused) return;

    const initInputs = async () => {
      const data = await loadProfileData();
      if (data) {
        setName(data.name || '');
        setLastName(data.lastName || '');
      }
    };
    initInputs();

    inputOpacity_1.value = 0;
    inputTranslateY_1.value = 20;
    inputOpacity_2.value = 0;
    inputTranslateY_2.value = 20;

    inputOpacity_1.value = withDelay(200, withTiming(1, { duration: 500 }));
    inputTranslateY_1.value = withDelay(200, withTiming(0, { duration: 500 }));
    inputOpacity_2.value = withDelay(400, withTiming(1, { duration: 500 }));
    inputTranslateY_2.value = withDelay(400, withTiming(0, { duration: 500 }));
  }, [isFocused, inputOpacity_1, inputTranslateY_1, inputOpacity_2, inputTranslateY_2]);

  const handleSave = async () => {
    await saveProfileData(name, lastName);
    Alert.alert('Успіх', 'Ваші дані надійно збережено!');
  };

  const handleClear = async () => {
    await deleteProfileData();
    setName('');
    setLastName('');
    Alert.alert('Очищено', 'Ваші дані видалено з пам\'яті.');
  };

  return (
    <View>
      <Animated.View style={animatedFieldsStyle_1}>
        <TextInput
          style={globalStyles.input}
          placeholder="Ім'я"
          placeholderTextColor="#666"
          value={name}
          onChangeText={setName}
        />
      </Animated.View>

      <Animated.View style={animatedFieldsStyle_2}>
        <TextInput
          style={globalStyles.input}
          placeholder="Прізвище"
          placeholderTextColor="#666"
          value={lastName}
          onChangeText={setLastName}
        />
      </Animated.View>

      <View style={globalStyles.rowContainer}>
        <Pressable style={[globalStyles.button, globalStyles.primaryButton]} onPress={handleSave}>
          <Text style={globalStyles.buttonText}>Зберегти</Text>
        </Pressable>
        <Pressable style={[globalStyles.button, globalStyles.redBtn]} onPress={handleClear}>
          <Text style={globalStyles.buttonText}>Очистити</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default function Profile() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={globalStyles.container}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={globalStyles.avatar}
        />
        <AnimatedFields />
      </View>
    </ScrollView>
  );
}