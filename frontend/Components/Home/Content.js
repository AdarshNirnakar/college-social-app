import { View,StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'


const Content = () => {
  return (
    <>
    <View style={styles.Container}>
      
      <View style={styles.button}>
        <Text style={styles.Text}>get help</Text> 
      </View>

      <View style={globalStyles.button,}>
        <Text style={styles.Text}>help others</Text> 
      </View>

    </View>
    <View style={styles.Seperator}></View>
    </>
    
  )
}
const styles = StyleSheet.create({
  Container:{
    height:'80%',
    alignItems:'stretch',
    justifyContent:'center',
   
  },

  // button:{
  //   padding:50,
  //   backgroundColor:'#9B64E1',
  //   borderRadius:25,
  //   marginTop:20,
  //   marginHorizontal:40
   
  // },

 

  Text:{
    fontSize:25
  },
   Seperator:{
        height: 1,
        width:'100%',
        backgroundColor:'#ddd'

    },
    Seperator:{
      height: 1,
      width:'100%',
      backgroundColor:'#ddd'

  },
  
})

export default Content