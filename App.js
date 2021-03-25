import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import Screen from './app/components/Screen';

export default function App() {
  return (
    <Screen>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Hi</Text>
        <StatusBar style="auto" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text: {
  //   color: 'white'
  // }
});
