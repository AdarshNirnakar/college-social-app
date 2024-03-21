import { View, Text } from "react-native";
import React from "react";

const Records = ({ count, text }) => {
  return (
    <View className="h-32 w-32 bg-purple-500  items-center rounded-2xl justify-around m-5">
      <Text className="font-bold text-4xl mt-1 text-white">{count}</Text>
      <Text className="font-bold text-center text-lg text-white   h-16 ">
        {text}
      </Text>
    </View>
  );
};

export default Records;
