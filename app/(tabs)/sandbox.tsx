import React, { useState } from 'react';
import { View, Text, Pressable, LayoutAnimation, Platform, UIManager } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withSequence } from 'react-native-reanimated';
import { globalStyles } from '../../styles/global';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const InfoBlock = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleBox = () => {
    LayoutAnimation.configureNext({...LayoutAnimation.Presets.easeInEaseOut, duration: 400});
    setExpanded(!expanded);
  };
  return (
    <View>
      <Pressable style={globalStyles.button} onPress={toggleBox}>
        <Text style={globalStyles.buttonText}>
          {expanded ? 'Приховати блок' : 'Показати блок'}
        </Text>
      </Pressable>
      {expanded && (
        <View style={{ marginTop: 20, padding: 15, backgroundColor: '#fff', borderRadius: 10 }}>
          <Text>{"Цей блок з'являється плавно."}</Text>
        </View>
      )}
    </View>
  );
};

const ReanimatedBlock = () => {
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  const animatedBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { rotate: `${rotation.value}deg` }
      ]
    };
  });

  const handleAnimate = () => {
    scale.value = withSequence(withSpring(1.3), withSpring(1));
    rotation.value = withTiming(rotation.value + 90, { duration: 500 });
  };

  return (
    <View style={{ marginTop: 60, borderTopColor: '#ccc', borderTopWidth: 1, paddingTop: 60 }}>
      <Pressable onPress={handleAnimate} style={{ alignItems: 'center' }}>
        <Animated.View
          style={[
            { width: 100, height: 100, backgroundColor: '#ff6347', borderRadius: 10, marginBottom: 60 },
            animatedBoxStyle
          ]}
        />
        <Text>Натисніть на квадрат для взаємодії</Text>
      </Pressable>
    </View>
  );
};

export default function Sandbox() {
  return (
    <View style={globalStyles.container}>
      <InfoBlock />
      <ReanimatedBlock />
    </View>
  );
}