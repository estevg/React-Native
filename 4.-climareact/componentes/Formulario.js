import React, {useState,} from 'react';
import {  View, TextInput, TouchableWithoutFeedback, Text, StyleSheet, Animated, Alert} from 'react-native'
import { Picker } from '@react-native-community/picker'




const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
const { ciudad, pais } = busqueda
const [ animacionBotton ] = useState(new Animated.Value(1));
const consultarClima = () => {
  if(pais.trim() === '' || ciudad.trim() === ''){
    mostrarAlerta()
    return;
  }

  guardarConsultar(true)

}

const mostrarAlerta = () => {
  Alert.alert(
    'Error',
    'Agrega un pais y una cidad en la búsqueda',
    [{text: 'OK'}]
  )
}


const animacionEntrada = () => {
    Animated.spring( animacionBotton, { 
        toValue: .75,
        useNativeDriver: true
    }).start();
}

const animacionSalida = () => {
    Animated.spring( animacionBotton, { 
        toValue: 1,
        friction: 5,
        tension: 30,
        useNativeDriver: true
    }).start();
}

const estiloAnimacion = {
    transform: [{ scale: animacionBotton }]
}

    return ( 
        <View>
        <View>
            <TextInput 
              value={ciudad}
              style={styles.input}
              placeholder="Escribir Ciudad"
              placeholderTextColor="#6666"
              onChangeText={ciudad => guardarBusqueda({ ...busqueda, ciudad})}
            />
        </View>
        <View>
          <Picker
            selectedValue={pais}
            itemStyle={{ height: 120, backgroundColor: '#fff'}}
            onValueChange={pais => guardarBusqueda({...busqueda, pais})}
          >
            <Picker.Item label="---Seleccione un país---" value="" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="Mexico" value="MX" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Costa Rica" value="CR" />
            <Picker.Item label="España" value="ES" />
            <Picker.Item label="Peru" value="PE" />
          </Picker>
        </View>
        <TouchableWithoutFeedback
            onPressIn={ () => animacionEntrada() }
            onPressOut={ () => animacionSalida() }
            onPress={ () => consultarClima()}
        >
          <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
            <Text style={styles.textoBuscar}>Bucar Clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
     );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50,
        backgroundColor: '#fff',
        fontSize: 20, 
        marginBottom: 20,
        textAlign: "center"
    },
    btnBuscar: {
        marginTop: 50,
        backgroundColor: 'black',
        padding: 10,
        justifyContent: 'center'
    },
    textoBuscar: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 18,
        textAlign: 'center'
    }
})
export default Formulario;