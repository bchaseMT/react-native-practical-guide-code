import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="dark" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllPlaces" component={AllPlaces} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});