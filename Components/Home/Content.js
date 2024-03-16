import { View,StyleSheet, Text } from 'react-native'
import React from 'react'

const Content = () => {
  return (
    <View style={styles.Container}>
      
      <View style={styles.boxGetHelp}>
        <Text style={styles.Text}>get help</Text> 
      </View>

      

      <View style={styles.boxHelpOthers}>
        <Text style={styles.Text}>help others</Text> 
      </View>

      

    </View>
  )
}
const styles = StyleSheet.create({
  Container:{
    height:'87%',
    alignItems:'stretch',
    justifyContent:'space-evenly',
    
    
  },

  boxGetHelp:{
    padding:50,
    backgroundColor:'#9B64E1',
    borderRadius:25,
    margin:50,
    marginBottom:-40
    
  },
  boxHelpOthers:{
    padding:50,
    backgroundColor:'#9B64E1',
    borderRadius:25,
    margin:50,
    marginTop:-40,
  },
  Text:{
    fontSize:25
  }

})

export default Content