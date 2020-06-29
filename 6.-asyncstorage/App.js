import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TouchableHighlight, TextInput, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const App = () => {

  const [texto, guardarTexto] = useState('')
  const [nombreStorage, guardarNombreStorage] = useState('')
  
    useEffect(() => {
      obtenerDatos()
    }, [])

  const guardarDatos = async () => {
    try {
      await AsyncStorage.setItem('nombre', texto)
      guardarNombreStorage(texto)
    } catch (error) {
      console.log(error)
    }
  }

  const obtenerDatos = async () => {
    try {
      const nombre = await AsyncStorage.getItem('nombre')
      guardarNombreStorage(nombre)
    } catch(error) {
      console.log(error)
    }
  }

  const eliminarDatos = async () => {
    try {
      await AsyncStorage.removeItem('nombre')
      guardarNombreStorage('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <View style={styles.contenedor}>

          { nombreStorage ? <Text>Hola: {nombreStorage}</Text> : null   }
          
          <TextInput 
           placeholder='Escribe tu nombre'
           style={styles.input} 
           onChangeText={text => guardarTexto(text)}
           />

          <Button 
            title="Guardar"
            color="#333"
            onPress={() => guardarDatos()}
          />
          {nombreStorage ?  <TouchableHighlight style={styles.btnEliminar} onPress={() => eliminarDatos()}>
              <Text style={styles.textoEliminar}>Eliminar</Text>
          </TouchableHighlight> : null }

      </View>
    </>
  );
};

const styles = StyleSheet.create({
    contenedor: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    input: {
      borderColor: '#666',
      height: 40,
      width: 300,
      borderBottomWidth: 1
    },
    btnEliminar: {
      backgroundColor: 'red',
      marginTop: 20,
      padding: 10
    },
    textoEliminar: {
      textAlign: 'center',
      textTransform: 'uppercase',
      color: '#fff',
      fontWeight: 'bold',
      width: 300
    }
});

export default App;
