import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';
import navigationStrings from './navigationStrings';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={navigationStrings.LOGIN_SCREEN}
        component={Screens.LoginScreen}
      />
      <Stack.Screen
        name={navigationStrings.SIGN_UP_SCREEN}
        component={Screens.SignUpScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
