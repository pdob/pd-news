import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#62727b'}}>
      <StatusBar />
      <Header />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

