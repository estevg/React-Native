import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Formulario from './componentes/Formulario'
import Clima from './componentes/Clima';

const App = () => {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

  const [consultar, guardarConsultar] = useState(false)
  const [resultado, guardarResultado] = useState({})
  const [color, guardarColor] = useState('rgb(71, 149, 212)')

  const ocultarTeclado = () => {
    Keyboard.dismiss()
  }

  const { pais, ciudad } = busqueda

  const bgcolor = {
    backgroundColor: color
  }

  useEffect(() => {
    const consultarClima = async () => {
      if(consultar){
        const apikey = 'd090768e906cda936f15cf6732736f42'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}`
        
        try {
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          guardarResultado(resultado)
          guardarConsultar(false)

          // modifica los colores de fondos basado en la tempratura
          const kelvin = 273.15
          const { main } = resultado
          const actual = main.temp - kelvin

          if(actual < 10){
            guardarColor('rgb(105, 108, 149)')
          }else if(actual >=10 && actual < 25){
            guardarColor('rgb(71, 149, 212)')
          }else{
            guardarColor('rgb(178, 28, 61)')
          }

        } catch (error) {
          mostrarAlerta()
          guardarConsultar(false)
        }
      }
    }
    consultarClima()
  }, [consultar, guardarConsultar])

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'No hay resultado intenta con otra ciudad',
      [{text: 'OK'}]
    )
  }
  

  return (
    <>
    <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
      <View style={[styles.app, bgcolor]}>
        <View style={styles.container}>
          <Clima 
            resultado={resultado}
          />
          <Formulario 
            busqueda={busqueda}
            guardarBusqueda={guardarBusqueda}
            guardarConsultar={guardarConsultar}
          />
        </View>
      </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    marginHorizontal: '2.5%'
  }
});

export default App;
