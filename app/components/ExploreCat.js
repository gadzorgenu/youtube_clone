import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

//components
import colors from '../config/colors';
import AppText from './AppText';

function ExploreCat({ bgImage, title, icon}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.img}>
                <View style={styles.comp}>
                    <MaterialCommunityIcons name={icon} style={{ color: colors.white}} size={24}/>
                    <AppText style={styles.text}>{title}</AppText>
                </View>
            </ImageBackground>
        </View>
    );
    }

const styles = StyleSheet.create({
 container: {
    gridTemplateColumns: 2
 },
 img: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
 },
 comp: {
    flexDirection: 'row'
 },
 text: {
     color: colors.white
 }
});

export default ExploreCat;