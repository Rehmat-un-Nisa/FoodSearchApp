import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Business Search" component={SearchScreen} />
        <Stack.Screen name="Show Business Search" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;