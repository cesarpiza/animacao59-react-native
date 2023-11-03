import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import Home from './home';
import Details from './details';

export default function App() {

  const { Navigator, Screen } = createNativeStackNavigator();

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen
          name='Home'
          component={Home}
        />
        <Screen
          name='Details'
          component={Details}
        />
      </Navigator>
    </NavigationContainer>
  );
}



export const styles = StyleSheet.create({
  container: {},
});