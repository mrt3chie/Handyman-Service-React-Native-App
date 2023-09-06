import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ServiceCategory from './ServiceCategory';
import MyBookingScreen from '../screens/MyBookingScreen'
import ServiceScreen from '../screens/ServiceScreen';



const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name='Home'
          component={HomeStack}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Entypo name="home" size={24} color="black" />
              )
            }
          }}
        />
        <Tab.Screen
          name='Service'
          component={ServicesStack}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <FontAwesome5 name="toolbox" size={24} color="black" />
              )
            }
          }}
        />
        <Tab.Screen
          name='Bookings'
          component={BookingStack}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <MaterialCommunityIcons name="notebook" size={24} color="black" />
              )
            }
          }}
        />
      </Tab.Navigator>
  )
}
const Stack = createStackNavigator();
const HomeStack = () => {
    
    return (
        
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            </Stack.Navigator>
        
    )
}

const ServicesStack = () => {
    
    return (
        
            <Stack.Navigator initialRouteName='ServiceCategory'>
                <Stack.Screen name='ServiceCategory' component={ServiceScreen}/>
            </Stack.Navigator>
        
    )
}

const BookingStack = () => {
    
    return (
        
            <Stack.Navigator initialRouteName='MyBooking'>
                <Stack.Screen name='MyBooking' component={MyBookingScreen} />
            </Stack.Navigator>
        
    )
}


export default TabNavigator

const styles = StyleSheet.create({})