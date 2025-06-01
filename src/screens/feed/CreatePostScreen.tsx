import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CreatePostScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Create Post Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
}); 