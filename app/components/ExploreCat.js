import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, Text,StyleSheet, View } from 'react-native';

//components
import colors from '../config/colors';
import AppText from './AppText';

function ExploreCat({ bgImage, title, icon}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/music.jpg')} style={styles.img}>
            <View style={styles.comp}>
                    <MaterialCommunityIcons name='music' style={{ color: colors.white, paddingRight: 10}} size={20}>
                        <AppText as='span' style={styles.text}>Music</AppText>
                    </MaterialCommunityIcons>
                </View> 
            </ImageBackground>
        </View>
    );
    }

const styles = StyleSheet.create({
 container: {
    // gridTemplateColumns: 2
    padding: 10
 },
 img: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '65%',
    height: 60,
    borderRadius: 20

 },
 comp: {
    // flexDirection: 'row'
    padding: 10
 },
 text: {
     color: colors.white,
     fontSize:15,
     paddingLeft: 10
 }
});

export default ExploreCat;