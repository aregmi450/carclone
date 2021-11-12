import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem';
import StyledButton from './components/StyledButton';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem/>
      <StyledButton/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
