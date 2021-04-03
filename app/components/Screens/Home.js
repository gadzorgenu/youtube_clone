import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../HomeCard';

const data = [
       {
              id: 1,
              imageUrl: require('../../assets/photo.jpg'),
              logo: require('../../assets/jacket.jpg'),
              title: '10 PHOTOGRAPHY IDEAS at HOME (quarantine)',
              author: 'Jordi Koalitic',
              views: '2.4M',
              duration: '11 months'
       },
       {
              id: 2,
              imageUrl: require('../../assets/engineer.jpg'),
              logo: require('../../assets/engineer.jpg'),
              title: '5 things I Wish I Knew Before Becoming a Software Engineer',
              author: 'Keep On Coding',
              views: '442k',
              duration: '1 year'
       },
       {
              id: 3,
              imageUrl: require('../../assets/newYork.jpg'),
              logo: require('../../assets/newYork.jpg'),
              title: 'How Much I Spend A Month Living in New York City | Millennial Money',
              author: 'Bukola',
              views: '112K',
              duration: '1 year'
       },
       {
              id: 4,
              imageUrl: require('../../assets/programmer.jpg'),
              logo: require('../../assets/programmer.jpg'),
              title: "Top 7 signs you're a Programmer",
              author: 'TechLead',
              views: '369K',
              duration: '7 months'
       },
       {
              id: 5,
              imageUrl: require('../../assets/js.jpg'),
              logo: require('../../assets/js.jpg'),
              title: 'What Programming Language Should I Learn First?',
              author: 'CS Dojo',
              views: '1.4M',
              duration: '3 years'
       }
]

function Home() {
 return (
        <FlatList 
              data={data}
              keyExtractor={ listing => listing.id.toString()}
              renderItem = {({item}) => 
                     <Card 
                        title={item.title}
                        imageUrl={item.imageUrl}
                        logo={item.logo}
                        author={item.author}
                        views={item.views}
                        duration={item.duration}
                     />
              }
        />
 )
}

const styles = StyleSheet.create({
 container: {}
});

export default Home;