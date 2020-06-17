import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';


const Citas = ({ item, eliminarPaciente }) => {

    const dialogoEliminar = (id) => {
        console.log('Eliminar', id)
        eliminarPaciente(id)
    }

	return (
		<View style={styles.citas}>
			<View>
				<Text style={styles.label}>Paciente: </Text>
				<Text style={styles.text}>{item.paciente}</Text>
			</View>
            <View>
				<Text style={styles.label}>Propietario: </Text>
				<Text style={styles.text}>{item.propietario}</Text>
			</View>
            <View>
				<Text style={styles.label}>Síntomas: </Text>
				<Text style={styles.text}>{item.sintomas}</Text>
			</View>

            <View>
                <TouchableHighlight style={styles.btnEliminar} onPress={() => dialogoEliminar(item.id)}>
                    <Text style={styles.textEliminar} > Eliminar &times; </Text>
                </TouchableHighlight>
            </View>

		</View>
	);
};

const styles = StyleSheet.create({
    citas: {
        backgroundColor: '#fff',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    text: {
        fontSize: 18,
    },
    btnEliminar: {
        backgroundColor: 'red',
        marginVertical: 10,
        padding: 10
    },
    textEliminar: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default Citas;
