import { View,StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'


const Content = () => {
  return (
    <>
    <View style={styles.Container}>
      
      <View style={GlobalStyles.button}>
        <Text style={GlobalStyles.Text}>get help</Text> 
      </View>

      <View style={GlobalStyles.button}>
        <Text style={GlobalStyles.Text}>help others</Text> 
      </View>

    </View>
    <View style={GlobalStyles.Seperator}></View>
    </>
    
  )
}
const styles = StyleSheet.create({
  Container:{
    height:'80%',
    alignItems:'stretch',
    justifyContent:'center',
  },
})

export default Content