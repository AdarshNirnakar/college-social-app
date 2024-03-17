import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'

const Footer = () => {
  return (
    <View style={styles.Container}>
        <View style={GlobalStyles.iconsAndName}>
            <Image 
            style={GlobalStyles.icons}
            source={require('../../assets/home.png')}            
            />
            <Text>Home</Text>
        </View>
        <View style={GlobalStyles.iconsAndName}>
            <Image 
            style={GlobalStyles.icons}
            source={require('../../assets/chat.png')}            
            />
            <Text>Chats</Text>
        </View>
        <View style={GlobalStyles.iconsAndName}>
            <Image 
            style={GlobalStyles.icons}
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
})

export default Footer