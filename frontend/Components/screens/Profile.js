import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Records from "../Profile/Records";
import BtnComp from "../BtnComp";

import PencilSvg from "../../assets/svg/pencil.svg";

const Profile = () => {
  return (
    <View className=" flex-1 flex-col">
      <View className="flex-[3]  items-center p-3 bg-white">
        <Image
          source={require("../../assets/images/profilePic.png")}
          className="h-32 w-32 rounded-full  "
        />
        <TouchableOpacity onPress={() => console.log("edit proPic")}>
          <Image
            source={require("../../assets/images/profilePic.png")}
            className="h-8 w-8 left-12 bottom-10 rounded-full "
          />
        </TouchableOpacity>

        <Text className="text-lg  text-center mt-[-5vh] p-[1vh] font-bold">
          user name
        </Text>
        <Text className="text-lg  text-center m-2 bg-purple-300 rounded-xl px-2">
          Bangalore Institute of Technology
        </Text>
      </View>
      <View className="flex-[6] flex-row flex-wrap justify-center mt-5  bg-current">
        <Records count={12} text={"Assignments completed"} />
        <Records count={600} text={"earned as erward"} />
        <Records count={1} text={"project completed"} />
        <Records count={5} text={"People helped you"} />
        <BtnComp title={"Rise a complaint"} />
      </View>
    </View>
  );
};

export default Profile;
