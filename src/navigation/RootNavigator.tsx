import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import PhotoScreen from '../screens/Photo';
import navigationLinking from '../config/navigation-linking';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer linking={navigationLinking}>
      <Stack.Navigator>
        <Stack.Screen
          name="Photos"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Photo"
          component={PhotoScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
