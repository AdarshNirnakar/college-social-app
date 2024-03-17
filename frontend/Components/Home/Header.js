import { View,Image,StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'

const Header = () => {
  return (
    <>
    <View style= {styles.container}>
        
        <View style={styles.logo}>
            <TouchableOpacity>


                {/* <Image                
                source= {require('../../assets/dribbble-fill.png')}
                /> */}


                <Text style={GlobalStyles.Text}>YeRaju</Text>
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
    <View style={GlobalStyles.Seperator}></View>
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
    
    profile:{        
        marginHorizontal: 10, 
    },

    profilePic:{
       height:50,
       width:50,
       borderRadius:25
    },

})

export default Header