import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

//components
import Header from './app/components/Header';
import Screen from './app/components/Screen';
import AppNavigator from './app/components/navigation/AppNavigator';
import NavigationTheme from './app/components/navigation/NavigationTheme';


export default function App() {
  return (
    <Screen>
      <Header />
     <NavigationContainer theme={NavigationTheme}>
       <AppNavigator />
     </NavigationContainer>
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
