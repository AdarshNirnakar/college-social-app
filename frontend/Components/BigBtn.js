import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const BigBtn = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-purple-600 p-[7vh] my-[3vh] mx-[5vh] rounded-xl text-center"
      onPress={onPress}
    >
      <Text className="text-white text-center text-[20px]">{title}</Text>
    </TouchableOpacity>
  );
};

export default BigBtn;
