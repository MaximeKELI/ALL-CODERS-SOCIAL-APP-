import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const EditProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Edit Profile Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
}); 