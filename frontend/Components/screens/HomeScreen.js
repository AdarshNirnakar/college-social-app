import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Header from "../../Components/Home/Header";
import Content from "../../Components/Home/Content";

const HomeScreen = () => {
  return (
    <View className="flex-1">
      <Header />
      <Content />
    </View>
  );
};
export default HomeScreen;
