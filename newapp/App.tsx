// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LanguageSelection from './LanguageSelection';
import AuthScreen from './AuthScreen';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import LoginOptionsScreen from './LoginOptionsScreen';
import ProductListingScreen from './ProductListingScreen';

export type RootStackParamList = {
  LanguageSelection: undefined;
  AuthScreen: { selectedLanguage: string };
  RegisterScreen: { selectedLanguage: string };
  LoginScreen: { selectedLanguage: string };
  LoginOptionsScreen: { selectedLanguage: string };
  ProductListingScreen: { selectedLanguage: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LanguageSelection">
        <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LoginOptionsScreen" component={LoginOptionsScreen} />
        <Stack.Screen name="ProductListingScreen" component={ProductListingScreen} options={{ title: 'Product Listings' }}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
