import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';

// React Nativgation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

// View
import Inicio from './view/Inicio'
import Nosotros from './view/Nosotros'

const App = () => {
  return (
    <>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Inicio'
          screenOptions={{
            headerStyle: {
              backgroundColor: '#000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen 
            name='Inicio'
            component={Inicio}
            options={{
              title: 'Principal'
            }}
          /> 
          <Stack.Screen  
            name='Nosotros' 
            component={Nosotros} 
            options={ ({route}) => ({
              title: route.params.clienteId
            })}
          />
        </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
