import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight, Alert, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';

const Formulario = ({citas, setCitas, guardarMostrar, guardarCitasStorage}) => {
    const [paciente, guardarPaciente] = useState('')
    const [propietario, guardarPropietario] = useState('')
    const [telefono, guardarTelefono] = useState('')
    const [sintomas, guardarSintomas] = useState('')
    const [fecha, guardarFecha] = useState('')
    const [hora, guardarHora] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    // Date Picker
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const confirmarFecha = (date) => {
      const opciones = { year: 'numeric', month: 'long', day: '2-digit'}
      guardarFecha(date.toLocaleDateString('es-ES',opciones))
      hideDatePicker();
    };

    // Time Picker 
    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };

      const confirmarHora = (time) => {
        const opciones = { hour: '2-digit', minute: '2-digit', hour12: true}
        guardarHora(time.toLocaleTimeString('en-US', opciones))
        hideTimePicker();
      };

      const CrearNuevaCita = () => {
        if(paciente.trim() === '' || 
           propietario.trim() === '' ||
           telefono.trim() === '' ||
           sintomas.trim() === ''||
           fecha.trim() === '' || 
           hora.trim() === ''
        ){
            mostrarAlerta()
            return
        }

        const cita = { paciente, propietario, telefono, sintomas, hora, fecha }
        // Agregar id
        cita.id = shortid.generate()
        
        // Guardar cita 
        const citaNueva = [...citas, cita]
        setCitas(citaNueva)
        guardarCitasStorage(JSON.stringify(citaNueva))

        guardarMostrar(false)

        // Resetear formulario 
        guardarPaciente('')
        guardarPropietario('')
        guardarTelefono('')
        guardarFecha('')
        guardarHora('')
        guardarSintomas('')

        
      }

      const mostrarAlerta = () => {
          Alert.alert(
              'Error',
              'Todos los campos son obligatorios',
              [{
                  text: 'OK'
              }]
          )
      }



    return ( 
        <>
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "position" : "height"}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <TextInput 
                    value={paciente}
                    style={styles.input}
                    onChangeText={text => guardarPaciente(text)}
                />
            </View>
            <View>
                <Text style={styles.label}>Dueño: </Text>
                <TextInput 
                    value={propietario}
                    style={styles.input}
                    onChangeText={text => guardarPropietario(text)}
                />
            </View>
            <View>
                <Text style={styles.label}>Contacto: </Text>
                <TextInput 
                    value={telefono}
                    keyboardType='numeric'
                    style={styles.input}
                    onChangeText={text => guardarTelefono(text)}
                />
            </View>
            <View>
                <Text style={styles.label}>Fecha: </Text>
                <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                <DateTimePickerModal
                    value={fecha}
                    isVisible={isDatePickerVisible}
                    mode="date"
                    locale='es_ES'
                    onConfirm={confirmarFecha}
                    onCancel={hideDatePicker}
                    headerTextIOS='Elige la fecha'
                    confirmTextIOS='Confirmar'
                    cancelTextIOS='Cancelar'
                />
                <Text>{fecha}</Text>
            </View>
            <View>
            <Text style={styles.label}>Hora: </Text>
                <Button title="Seleccionar Hora" onPress={showTimePicker} />
                <DateTimePickerModal
                    value={hora}
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmarHora}
                    onCancel={hideTimePicker}
                    headerTextIOS='Elige la hora'
                    confirmTextIOS='Confirmar'
                    cancelTextIOS='Cancelar'
                />
                <Text>{hora}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sintomas: </Text>
                <TextInput 
                    value={sintomas}
                    multiline
                    style={styles.input}
                    onChangeText={text => guardarSintomas(text)}
                />
            </View>
            <View>
                <TouchableHighlight style={styles.btnSubmit} onPress={() => CrearNuevaCita()}>
                    <Text style={styles.textSubmit} > Crear Nueva Cita  </Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </>
     );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btnSubmit: {
        backgroundColor: '#7D024E',
        marginVertical: 10,
        padding: 10
    },
    textSubmit: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    }
})
 
export default Formulario;