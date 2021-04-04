import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, Text,StyleSheet, View } from 'react-native';

//components
import colors from '../config/colors';
import AppText from './AppText';

function ExploreCat({ bgImage, title, icon}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.img}>
            <View style={styles.comp}>
                    <MaterialCommunityIcons name={icon} style={{ color: colors.white}} size={28}>
                        <AppText as='span' style={styles.text}>{title}</AppText>
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
    height: 50,
    borderRadius: 20

 },
 comp: {
    // flexDirection: 'row'
    paddingTop: 5,
    paddingLeft: 10
 },
 text: {
     color: colors.white,
     fontSize:18,
     fontWeight: 'bold',
     paddingLeft: 10,
 }
});

export default ExploreCat;