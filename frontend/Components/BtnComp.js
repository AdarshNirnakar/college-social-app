import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const BtnComp = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-purple-500  px-[8vh]  py-[2vh]  mt-[5vh] rounded-2xl"
      onPress={onPress}
    >
      <Text className="font-bold text-white text-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default BtnComp;
