import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from '../screens/IntroScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultScreen from '../screens/ResultScreen';

export type RootStackParamList = {
  Intro: undefined;
  Quiz: undefined;
  Result: { result: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Intro" id={undefined}>
      <Stack.Screen 
        name="Intro" 
        component={IntroScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Quiz" 
        component={QuizScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Result" 
        component={ResultScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
