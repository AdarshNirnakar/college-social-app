import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import Home_svh  from '../../assets/svg/Home.svg'
import Messages_svg from '../../assets/svg/Messages.svg'
import Noti_svg from '../../assets/svg/Notification-bell.svg'

const Footer = () => {
  return (
    <View style={styles.Container}>
        <View style={GlobalStyles.iconsAndName}>
            <Home_svh style={GlobalStyles.icons} />            
            <Text>Home</Text>
        </View>

        <View style={GlobalStyles.iconsAndName}>
            <Messages_svg style={GlobalStyles.icons}/>
            <Text>Chats</Text>
        </View>

        <View style={[GlobalStyles.iconsAndName,GlobalStyles.largeIcon]}>
            <Noti_svg style={GlobalStyles.icons} />
            <Text>Notifications</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        height:60,
        backgroundColor:'red',
       

        
    },
})

export default Footer