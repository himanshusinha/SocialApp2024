import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';
import navigationStrings from './navigationStrings';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={navigationStrings.BOTTOM_TAB_STACK}
        component={Screens.BottomTabStack}
      />
      <Stack.Screen
        name={navigationStrings.CREATE_POST_SCREEN}
        component={Screens.CreatePostScreen}
      />
      <Stack.Screen
        name={navigationStrings.SEARCH_SCREEN}
        component={Screens.SearchScreen}
      />
      <Stack.Screen
        name={navigationStrings.NOTIFICATIONS_SCREEN}
        component={Screens.NotificationScreen}
      />
      <Stack.Screen
        name={navigationStrings.PROFILES_SCREEN}
        component={Screens.ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
