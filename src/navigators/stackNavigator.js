import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, VitaminDetailsScreen, AboutIngredient} from '../screens';

function Navigator() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen}  />
        <Stack.Screen name="VitaminDetailsScreen" component={VitaminDetailsScreen} />
        <Stack.Screen name="AboutIngredient" component={AboutIngredient} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigator;
