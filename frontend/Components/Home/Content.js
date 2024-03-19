import { View, StyleSheet, Text, ScrollView, Button } from 'react-native'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import { useNavigation } from "@react-navigation/native";


const Content = () => {

  const navigation = useNavigation();



  return (
    <>
      <View style={styles.Container}>

        <View style={GlobalStyles.button}>
          <Button title='profile' onPress={() => navigation.navigate("Profile")}>
          </Button>

        </View>



        {/* <View style={GlobalStyles.button}>
        <Text className ='text-lg'>get help</Text> 
      </View> */}

        <View style={GlobalStyles.button}>
          <Text style={GlobalStyles.Text}>help others</Text>
        </View>

      </View>
      <View style={GlobalStyles.Seperator}></View>
    </>

  )
}
const styles = StyleSheet.create({
  Container: {
    height: '80%',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
})

export default Content