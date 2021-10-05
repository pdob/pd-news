import React from 'react';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Business from '../containers/Business';
import Coronavirus from "../containers/Coronavirus";
import Crypto from "../containers/Crypto";
import Latest from "../containers/Latest";
import Technology from '../containers/Technology';
import Sports from '../containers/Sports';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {

  return (
    <Tab.Navigator 
      initialLayout={{width: Dimensions.get('window').width}}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#819ca9',
          borderTopWidth: 0.5,
          borderTopColor: '#cfcfcf',
          height: 50
        },
        tabBarItemStyle: {
          width: 'auto',
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: 'Roboto',
          color: 'white'
        },
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
          height: 1
        }
      }}
      
    >
      <Tab.Screen name='Latest' component={Latest} />
      <Tab.Screen name='Business' component={Business} />
      <Tab.Screen name='Coronavirus' component={Coronavirus} />
      <Tab.Screen name='Crypto' component={Crypto} />
      <Tab.Screen name='Sports' component={Sports} />
      <Tab.Screen name='Technology' component={Technology} />
    </Tab.Navigator>
  );
};

export default TabNavigation;