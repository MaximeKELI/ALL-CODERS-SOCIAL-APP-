import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ChatListScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Chat List Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
}); 