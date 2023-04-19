import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Mylp from './Mylp';
import Prdm from './Prdm';
import Pucca from './Pucca';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar(){
  return (
    <Tab.Navigator initialRoutName="Mylp" screenOptions={{headerShown:false}}>
      <Tab.Screen name="Mylp" component={Mylp}
      options={{tabBarIcon:({color, size})=>
      <FontAwesome5 name="horse" size={size} color={color} /> }} 
      />

       <Tab.Screen name="Prdm" component={Prdm}
      options={{tabBarIcon:({color, size})=>
     <MaterialCommunityIcons name="jellyfish" size={size} color={color} /> }} 
      />

       <Tab.Screen name="Pucca" component={Pucca}
      options={{tabBarIcon:({color, size})=>
<MaterialCommunityIcons name="ninja"size={size} color={color} /> }}
      />
      </Tab.Navigator>
  )
}