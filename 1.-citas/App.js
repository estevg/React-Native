import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Platform } from 'react-native';
import Citas from './componentes/citas';
import Formulario from './componentes/formulario'
import AsyncStorage from '@react-native-community/async-storage'


const App = () => {
	const [mostrar, guardarMostrar] = useState(true)
	// definir el useState
	const [ citas, setCitas ] = useState([]);

	useEffect(() => {
		const obtenerCitasStorage = async () => {
			try {
				const citasStorage = await AsyncStorage.getItem('citas')
				if(citasStorage){
					setCitas(JSON.parse(citasStorage))
				}
			} catch (error) {
				console.log(error)
			}
		}
		obtenerCitasStorage()
	}, [])



	const eliminarPaciente = (id) => {

		const citasFiltradas = citas.filter((cita) => cita.id !== id);

		setCitas(citasFiltradas)
		guardarCitasStorage(JSON.stringify(citasFiltradas))
	};

	const Mostrar = () => {
		guardarMostrar(!mostrar)
	}

	const guardarCitasStorage = async (citasJSON) => {
		try {
			await AsyncStorage.setItem('citas', citasJSON)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<View style={styles.contenedor}>
			<Text style={styles.titulo}>Administrador de Citas</Text>
			<View>
                <TouchableHighlight style={styles.btnMostrar} onPress={() => Mostrar()}>
                    <Text style={styles.textMostrar} > {mostrar ? 'Mostrar listado de citas' : 'Crear nueva cita'} </Text>
                </TouchableHighlight>
            </View>
			<View style={styles.contenido}>
				{mostrar ? (
					<>
						<Text style={styles.titulo}>Crear Nueva Cita</Text>
						<Formulario 
						setCitas={setCitas}
						citas={citas}
						guardarMostrar={guardarMostrar}
						guardarCitasStorage={guardarCitasStorage}
						/>
					</>
				) : (
					<>
						<Text style={styles.titulo}>{citas.length > 0 ? 'Administrador de Citas' : 'No hay citas'}</Text>
						<FlatList
							style={styles.listado}
							data={citas}
							renderItem={({ item }) => <Citas item={item} eliminarPaciente={eliminarPaciente} />}
							keyExtractor={citas => citas.id}
						/>
					</>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	contenedor: {
		backgroundColor: '#AA0766',
		flex: 1
	},
	titulo: {
		marginTop: Platform.OS === 'ios' ? 40 : 20 ,
		marginBottom: 20,
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#fff'
	},
	contenido: {
		flex: 1,
        marginHorizontal: '2.5%'
	},
	listado: {
		flex: 1
	},
	btnMostrar: {
        backgroundColor: '#7D024E',
        marginVertical: 10,
        padding: 10
    },
    textMostrar: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    }
});

export default App;
