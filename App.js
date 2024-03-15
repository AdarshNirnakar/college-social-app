import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>College collaboration </Text>
      <StatusBar style="auto" />
    </View>
    
  );
}


