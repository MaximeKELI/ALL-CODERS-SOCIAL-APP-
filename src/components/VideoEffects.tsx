import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import { Camera } from 'react-native-camera';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface Effect {
  id: string;
  name: string;
  filter: string;
}

const effects: Effect[] = [
  { id: '1', name: 'Normal', filter: 'none' },
  { id: '2', name: 'Vintage', filter: 'sepia' },
  { id: '3', name: 'Noir', filter: 'grayscale' },
  { id: '4', name: 'Vibrant', filter: 'saturate' },
  { id: '5', name: 'Cool', filter: 'cool' },
  { id: '6', name: 'Warm', filter: 'warm' },
];

const VideoEffects = () => {
  const [selectedEffect, setSelectedEffect] = useState<Effect>(effects[0]);
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef<Camera>(null);

  const startRecording = async () => {
    if (cameraRef.current) {
      setIsRecording(true);
      try {
        const { uri } = await cameraRef.current.recordAsync({
          quality: '720p',
          maxDuration: 60,
        });
        // Handle the recorded video
        console.log('Video recorded:', uri);
      } catch (error) {
        console.error('Recording error:', error);
      } finally {
        setIsRecording(false);
      }
    }
  };

  const stopRecording = () => {
    if (cameraRef.current && isRecording) {
      cameraRef.current.stopRecording();
    }
  };

  const renderEffectButton = (effect: Effect) => {
    const isSelected = selectedEffect.id === effect.id;
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        {
          scale: withSpring(isSelected ? 1.1 : 1),
        },
      ],
      opacity: withTiming(isSelected ? 1 : 0.7),
    }));

    return (
      <Animated.View key={effect.id} style={[styles.effectButton, animatedStyle]}>
        <TouchableOpacity
          onPress={() => setSelectedEffect(effect)}
          style={[
            styles.effectButtonInner,
            isSelected && styles.selectedEffect,
          ]}
        >
          <Text style={styles.effectName}>{effect.name}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={Camera.Constants.Type.back}
        filter={selectedEffect.filter}
      >
        <View style={styles.controls}>
          <TouchableOpacity
            style={[styles.recordButton, isRecording && styles.recording]}
            onPress={isRecording ? stopRecording : startRecording}
          >
            <View style={styles.recordButtonInner} />
          </TouchableOpacity>
        </View>
      </Camera>

      <View style={styles.effectsContainer}>
        {effects.map(renderEffectButton)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  recordButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recording: {
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
  },
  recordButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  effectsContainer: {
    position: 'absolute',
    bottom: 120,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  effectButton: {
    marginHorizontal: 8,
  },
  effectButtonInner: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  selectedEffect: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  effectName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default VideoEffects; 