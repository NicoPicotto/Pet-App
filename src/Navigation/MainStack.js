import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from '../Screens/Home/HomeScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='Profile' component={ProfileScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStack;
