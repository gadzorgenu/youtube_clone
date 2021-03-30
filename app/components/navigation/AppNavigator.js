import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';

//components
import Home from '../Screens/Home';
import Explore from '../Screens/Explore';
import Subscriptions from '../Screens/Subscriptions';
import Notifications from '../Screens/Notifications';
import Library from '../Screens/Library';

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    
 return (
     <Tab.Navigator>
         <Tab.Screen 
            name='Home'
            component={Home}
            options={{
                tabBarIcon : ({ color, size}) => 
                <MaterialCommunityIcons
                    color={color}
                    name='home'
                    size={size}
                />
            }}
         />
         <Tab.Screen 
            name='Explore'
            component={Explore}
            options={{
                tabBarIcon : ({ color, size}) => 
                <MaterialCommunityIcons
                    color={color}
                    name='compass'
                    size={size}
                />
            }}
         />
         <Tab.Screen 
            name='Subscriptions'
            component={Subscriptions}
            options={{
                tabBarIcon : ({ color, size}) => 
                <MaterialCommunityIcons
                    color={color}
                    name='youtube-subscription'
                    size={size}
                />
            }}
         />
         <Tab.Screen 
            name='Notifications'
            component={Notifications}
            options={{
                tabBarIcon : ({ color, size}) => 
                <MaterialCommunityIcons
                    color={color}
                    name='bell'
                    size={size}
                />
            }}
         />
         <Tab.Screen 
            name='Library'
            component={Library}
            options={{
                tabBarIcon : ({ color, size}) => 
                <MaterialCommunityIcons
                    color={color}
                    name='play-box-multiple'
                    size={size}
                />
            }}
         />
     </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
 container: {
     marginBottom: 10
 }
});

export default AppNavigator;