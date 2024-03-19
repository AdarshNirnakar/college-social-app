import { View, StyleSheet, Text, ScrollView, Button } from "react-native";
import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import BigBtn from "../BigBtn";

const Content = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.Container}>
        <BigBtn
          title={"Post Request"}
          onPress={() => navigation.navigate("GetHelpScreen")}
        />
        <BigBtn
          title={"Requests"}
          onPress={() => navigation.navigate("HelpOthers")}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  Container: {
    height: "80%",
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export default Content;
