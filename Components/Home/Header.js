import { View,Image,StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <>
    <View style= {styles.container}>
        
        <View style={styles.logo}>
            <TouchableOpacity>


                {/* <Image                
                source= {require('../../assets/dribbble-fill.png')}
                /> */}


                <Text style={styles.logotext}>YeRaju</Text>
            </TouchableOpacity>
        </View>
       
        <View style={styles.profile}>
            <TouchableOpacity>
            <Image
            style = {styles.profilePic}
            source= {require('../../assets/profilePic.png')}
            />
            </TouchableOpacity>            
        </View>  
        
    </View>
    <View style={styles.Seperator}></View>
    </>
  )
}


const styles = StyleSheet.create({
    container:{
        
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding:10        
    },

    logo:{
        flexDirection: 'row',
        marginHorizontal: 20,
    },

    logotext:{
        fontSize:25

    },

    profile:{        
        marginHorizontal: 10, 
    },

    profilePic:{
       height:50,
       width:50,
       borderRadius:25
    },

    Seperator:{
        height: 1,
        width:'100%',
        backgroundColor:'#ddd'

    },
  
})

export default Header