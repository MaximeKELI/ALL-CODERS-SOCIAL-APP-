import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PostDetailScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Post Detail Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
}); 