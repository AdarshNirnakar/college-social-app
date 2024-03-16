import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.Container}>
        <View style={styles.iconsAndText}>
            <Image 
            style={styles.icons}
            source={require('../../assets/home.png')}            
            />
            <Text>Home</Text>
        </View>
        <View style={styles.iconsAndText}>
            <Image 
            style={styles.icons}
            source={require('../../assets/chat.png')}            
            />
            <Text>Chats</Text>
        </View>
        <View style={styles.iconsAndText}>
            <Image 
            style={styles.icons}
            source={require('../../assets/notification.png')}            
            />
            <Text>Notifications</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
       
        flexDirection:'row',
        justifyContent:"space-around",
    },

    iconsAndText:{
        alignItems:'center',
        
        
    },

    icons:{
        marginTop:5,
        height:50,
        width:50,
        resizeMode:'cover'

    }
   

})

export default Footer