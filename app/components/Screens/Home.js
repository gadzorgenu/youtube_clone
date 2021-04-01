import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../Card';

const listings =[
       {
              id: 1,
              imageUrl: require('../../assets/photo.jpg'),
              logo: require('../../assets/jacket.jpg'),
              title: '10 PHOTOGRAPHY IDEAS at HOME (quarantine)',
              author: 'Jordi Koalitic',
              views: '2.4M',
              duration: '11 months'
       }
]

function Home() {
 return (
        <FlatList 
              data={listings}
              keyExtractor={(listing)=> listing.id.toString()}
              renderItem = { (item)=>{
                     <Card 
                        title={item.title}
                        imageUrl={item.imageUrl}
                        logo={item.logo}
                        author={item.author}
                        views={item.views}
                        duration={item.duration}
                     />
              }}
        />
       //  <Card />
 )
}

const styles = StyleSheet.create({
 container: {}
});

export default Home;