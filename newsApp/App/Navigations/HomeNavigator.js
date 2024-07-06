import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../Screens/Home';
import ReadNews from '../Screens/ReadNews';

const Stack = createStackNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="readNews" component={ReadNews} />
        </Stack.Navigator>
    )
}

export default HomeNavigator