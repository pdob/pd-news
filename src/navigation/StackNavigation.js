import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WebViewScreen from '../containers/WebViewScreen';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Home' component={TabNavigation}/>
      <Stack.Screen name='Web' component={WebViewScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;