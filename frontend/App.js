import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';

import HomeScreen from './Components/screens/HomeScreen';


export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
      <HomeScreen />
    </View>
    
  );
}


