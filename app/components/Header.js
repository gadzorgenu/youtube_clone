import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Fontisto,MaterialCommunityIcons } from '@expo/vector-icons' 

function Header() {
 return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={ require('../assets/yo.png')}
            />
            <View style={styles.sideIcons}>
                <MaterialCommunityIcons 
                    name='video'
                    color='gray'
                    size={30}
                />
                <Fontisto  
                    style={
                        { paddingTop:5, paddingLeft: 18}
                    } 
                    name='search' 
                    size={20} 
                    color='gray' 
                />
                <MaterialCommunityIcons 
                    name='account-circle'
                    color='gray'
                    size={30}
                    style={
                        {paddingLeft: 15}
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
 container: {
     backgroundColor: 'white',
     padding: 5,
     flexDirection: 'row',
     elevation: 5
 },
 sideIcons:{
    paddingLeft: '25%',
    flexDirection: 'row',
    // justifyContent:''
 }
});

export default Header;