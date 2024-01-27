import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {NavigationContainer} from '@react-navigation/native';

const RoutesStack = () => {
  return (
    <NavigationContainer>
      {false ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RoutesStack;
