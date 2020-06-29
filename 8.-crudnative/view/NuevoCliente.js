import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Platform } from 'react-native';
import { TextInput, Headline, Button, Dialog, Paragraph, Portal } from 'react-native-paper';
import axios from 'axios';
import globalStyles from '../styles/global';
const NuevoCliente = ({ navigation, route }) => {
	const { guardarConsultarAPI } = route.params;
	const [ nombre, guardarnombre ] = useState('');
	const [ telefono, guardarTelefono ] = useState('');
	const [ correo, guardarCorreo ] = useState('');
	const [ empresa, guardarEmpresa ] = useState('');
	const [ alerta, guardarAlerta ] = useState(false);

	useEffect(() => {
		if (route.params.cliente) {
			const { nombre, telefono, correo, empresa } = route.params.cliente;
			guardarnombre(nombre);
			guardarTelefono(telefono);
			guardarCorreo(correo);
			guardarEmpresa(empresa);
		} else {
			console.log('nuevo cliente');
		}
	}, []);

	const guardarCliente = async () => {
		// Validar
		if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
			guardarAlerta(true);
			return;
		}

		// Generar el cliente
		const cliente = { nombre, telefono, correo, empresa };


        if(route.params.cliente){
            const {id} = route.params.cliente
            cliente.id = id
            const url = `http://localhost:3000/clientes/${id}`

            try {
                await axios.put(url, cliente)
            } catch (error) {
                console.log(error)
            }


        }else{
		// Guardar el cliente en la Api
            try {
                if (Platform.OS === 'ios') {
                    await axios.post('http://localhost:3000/clientes', cliente);
                } else {
                    await axios.post('http://10.0.2.2:3000/clientes', cliente);
                }
            } catch (error) {
                console.log(error);
            }
        }

		// Redireccionar
		navigation.navigate('Inicio');

		// Limpiar el form (opcional)
		guardarnombre('');
		guardarTelefono('');
		guardarCorreo('');
		guardarEmpresa('');
		guardarConsultarAPI(true);
	};

	return (
		<View style={globalStyles.contenedor}>
			<Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>

			<TextInput
				label="Nombre"
				placeholder="Esteban"
				onChangeText={(text) => guardarnombre(text)}
				style={styles.input}
				value={nombre}
			/>
			<TextInput
				label="Telefono"
				placeholder="21213131"
				onChangeText={(text) => guardarTelefono(text)}
				style={styles.input}
				value={telefono}
			/>
			<TextInput
				label="Correo"
				placeholder="Esteban"
				onChangeText={(text) => guardarCorreo(text)}
				style={styles.input}
				value={correo}
			/>
			<TextInput
				label="Empresa"
				placeholder="Empresa"
				onChangeText={(text) => guardarEmpresa(text)}
				style={styles.input}
				value={empresa}
			/>

			<Button icon="pencil-circle" mode="contained" onPress={() => guardarCliente()}>
				Guardar Cliente
			</Button>

			<Portal>
				<Dialog visible={alerta} onDismiss={() => guardarAlerta(false)}>
					<Dialog.Title>Error</Dialog.Title>
					<Dialog.Content>
						<Paragraph>Todos los campos son obligatorios</Paragraph>
					</Dialog.Content>
					<Dialog.Actions>
						<Button onPress={() => guardarAlerta(false)}>OK</Button>
					</Dialog.Actions>
				</Dialog>
			</Portal>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		marginBottom: 20,
		backgroundColor: 'transparent'
	}
});

export default NuevoCliente;
