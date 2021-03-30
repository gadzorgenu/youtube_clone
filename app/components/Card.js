import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
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
            source={{ uri: imageUrl}}
        />
        <View style={styles.detailsContainer}>
            <Image
                source={{ uri: logo}}
                style={styles.logo} 
            />
            <View>
                <AppText style={styles.title} 
                    numberOfLines={2}
                >
                    {title}
                </AppText>
                <View style={styles.details}>
                    <AppText>{ author}</AppText>
                    <AppText>{views} views </AppText>
                    <AppText>{duration} week ago </AppText>
                </View>
            </View>
            <MaterialCommunityIcons  name='' color='gray'/>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
 container: {
     marginBottom: 5,
     overflow: 'hidden',
     backgroundColor: colors.white
 },
 image: {
     width: '100%',
     height: 200
 },
 detailsContainer: {
     padding: 10,
     flexDirection: 'row'
 },
 logo: {

 },
 details: {
     flexDirection: 'row',
     color: 'gray'
 }
});

export default Card;