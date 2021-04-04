import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ExploreCat from '../ExploreCat';

const category = [
    {
        id: 1,
        bgImage: require('../../assets/music.jpg'),
        title: 'Music',
        icon: 'music'
    },
    {
        id: 2,
        bgImage: require('../../assets/sport.jpg'),
        title: 'Sports',
        icon: 'trophy-variant'
    },
    {
        id: 3,
        bgImage: require('../../assets/gaming.jpg'),
        title: 'Gaming',
        icon: 'gamepad-variant'
    }
]

function Explore() {
 return (
     <FlatList 
        data={category}
        keyExtractor={ cat => cat.id.toString()}
        renderItem= {({item}) =>
        <ExploreCat 
            bgImage= { item.bgImage}
            title={item.title}
            icon={item.icon}
        />
    }
     />
        // <Text>hi</Text>
 )
}

const styles = StyleSheet.create({
 container: {}
});

export default Explore;