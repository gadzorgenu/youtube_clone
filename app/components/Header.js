import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Fontisto,MaterialCommunityIcons } from '@expo/vector-icons' 

function Header() {
 return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={ require('../assets/youtube.png')}
            />
            <View style={styles.sideIcons}>
                <MaterialCommunityIcons 
                    name='video'
                    color='gray'
                    size={30}
                />
                <Fontisto  
                    style={
                        {   paddingTop:5, 
                            paddingLeft: 18,
                            paddingRight: 15
                        }
                    } 
                    name='search' 
                    size={20} 
                    color='gray' 
                />
                {/* <MaterialCommunityIcons 
                    name='account-circle'
                    color='gray'
                    size={24}
                    style={
                        {paddingLeft: 15}
                    }
                /> */}
                <Image 
                    style={styles.user}
                    source={require('../assets/me.jpg')}
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
 },
 user: {
     width:25,
     height: 25,
     borderRadius: 35,
     paddingTop: 2
    }
});

export default Header;