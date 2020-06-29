import React, { useEffect, useState } from 'react';
import { Text, FlatList, View } from 'react-native';
import axios from 'axios';
import { List, Headline, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global';
const Inicio = ({ navigation }) => {
	const [ clientes, guardarClientes ] = useState([]);
	const [ consultarAPI, guardarConsultarAPI ] = useState(true);

	useEffect(
		() => {
			const obtenerClientes = async () => {
				try {
					const resultado = await axios.get('http://localhost:3000/clientes');
					guardarClientes(resultado.data);
					guardarConsultarAPI(false);
				} catch (error) {
					console.log(error);
				}
			};
			if (consultarAPI) {
				obtenerClientes();
			}
		},
		[ consultarAPI ]
	);

	return (
		<View style={globalStyles.contenedor}>
			<Button icon="plus-circle" onPress={() => navigation.navigate('NuevoCliente', { guardarConsultarAPI })}>
				Nuevo Cliente
			</Button>
			<Headline style={globalStyles.titulo}>{clientes.length > 0 ? 'Clientes' : 'Aun no hay Clientes'}</Headline>
			<FlatList
				data={clientes}
				renderItem={({ item }) => (
					<List.Item
						title={item.nombre}
						description={item.empresa}
						onPress={() => navigation.navigate('DetallesCliente', { item, guardarConsultarAPI })}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
			<FAB
				icon="plus"
				style={globalStyles.fab}
				onPress={() => navigation.navigate('NuevoCliente', { guardarConsultarAPI })}
			/>
		</View>
	);
};

export default Inicio;
