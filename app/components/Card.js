import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

//components
import colors from '../config/colors'
import AppText from './AppText';


const Card = ({ 
    title, 
    author, 
    views, 
    duration, 
    logo, 
    time, 
    imageUrl,
}) => {
 return (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={imageUrl}
        />
        <View style={styles.detailsContainer}>
            <Image
                source={logo}
                style={styles.logo} 
            />
            <View style={styles.subDetail}>
                <AppText style={styles.title} 
                    numberOfLines={2}
                >
                    {title}
                </AppText>
                <View style={styles.details}>
                    <AppText style={styles.sub}>
                    { author} <Text as='span'>. </Text>
                    </AppText>
                    <AppText style={styles.sub}>
                        {views} views <Text as='span'>. </Text>
                    </AppText>
                    <AppText style={styles.sub}>
                        {duration}  ago 
                    </AppText>
                </View>
            </View>
            {/* <MaterialCommunityIcons name='dots-vertical' size={24} color="gray" /> */}
        </View>
    </View>
);
}

const styles = StyleSheet.create({
 container: {
     marginBottom: 5,
     overflow: 'hidden',
     backgroundColor: colors.white,
     width: '100%'
 },
 image: {
     width: '100%',
     height: 200
 },
 detailsContainer: {
     padding: 12,
     flexDirection: 'row',
 },
 logo: {
    width: 40,
    height: 40,
    borderRadius: 20
 },
 details: {
     flexDirection: 'row',
     color: 'gray',
     fontSize: 7
 },
  sub :{
    fontSize: 12
 },
 subDetail: {
    paddingLeft: 10
 },
 title: {
     fontSize: 16
 }
});

export default Card;