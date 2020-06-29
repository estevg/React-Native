import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View} from 'react-native';

// Navigation 
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// View
import Inicio from './view/Inicio'
import NuevoCliente from './view/NuevoCliente'
import DetallesCliente from './view/DetallesCliente'
import BarraSuperior from './componenst/ui/Barra'

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

/// Definir tema 
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774f2',
    accent: '#0655bf'
  }
}


const App = () => {
  return (
    <>
    <PaperProvider>
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary
          },
          headerTintColor: theme.colors.surface,
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
        }}
       >
         
         <Stack.Screen 
          name='Inicio'
          component={Inicio}
          // options={({navigation, route}) => ({
          //   headerLeft: (props) =>  <BarraSuperior {...props} navigation={navigation} route={route}  />
          // })}
         />
         <Stack.Screen 
          name="NuevoCliente"
          component={NuevoCliente}
          options={{
            title: 'Nuevo Cliente'
          }}
         />
          <Stack.Screen 
          name='DetallesCliente'
          component={DetallesCliente}
          options={{
            title: 'Detalles Cliente'
          }}
         />

       </Stack.Navigator>
     </NavigationContainer>
     </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
