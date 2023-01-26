import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ScreenWrapper from '../components/screenWrapper';
import AddTripScreen from '../screens/AddTripScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name="addTrip" options={{ headerShown: false }} component={AddTripScreen} />
          <Stack.Screen name="tripExpenses" options={{ headerShown: false }} component={TripExpensesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

export default AppNavigation;