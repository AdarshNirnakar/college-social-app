import { View,Image,StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style= {styles.container}>
        
        <View style={styles.logAndText}>
        <TouchableOpacity>
        <Image 
        styles={styles.logo}
        source= {require('../../assets/dribbble-fill.png')}
        />
        <Text>connect to ppl</Text>  
        </TouchableOpacity>


        </View>
       
        <View style={styles.iconsContainer}>
            <Image          
            source={require('../../assets/chat-3-line.png')}
            />           

        </View>

      
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#eee",
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',        
    },
    logAndText:{
        flexDirection: 'row',
        marginHorizontal: 20,

    },

    iconsContainer:{
        flexDirection:'row',
        marginHorizontal: 20,
       

    },
    logo:{
        height:550,
        width:50,
        resizeMode:'contain',
        
        
    },
})

export default Header