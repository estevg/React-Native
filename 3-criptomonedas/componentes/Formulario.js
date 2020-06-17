import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';
const Fomulario = ({ moneda, criptomoneda, guardarCriptomoneda, guardarMoneda, guardarConsultarApi}) => {

	const [ criptomonedas, guardarCriptomonedas ] = useState([]);

	useEffect(() => {
		const consultarApi = async () => {
			const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
			const resultado = await axios.get(url);
			guardarCriptomonedas(resultado.data.Data);
			// console.log(resultado.data.Data);
		};
		consultarApi();
	}, []);
	// Almanece la moneda
	const obtenerMoneda = (moneda) => {
		guardarMoneda(moneda);
	};
	// ALmacena la criptomoneda
	const obtenerCriptomoneda = (cripto) => {
		guardarCriptomoneda(cripto);
    };
    
    const CotizarPrecio = () => {
        if(moneda.trim() === '' || criptomoneda.trim() === '' ){
            mostrarAlerta()
            return
        }

        guardarConsultarApi(true)

    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Ambos campos son obligatorios',
            [{
                text: 'OK'
            }]
        )
    }

	return (
		<View>
			<Text style={styles.label}>Modena</Text>
			<Picker
				selectedValue={moneda}
				onValueChange={(moneda) => obtenerMoneda(moneda)}
				itemStyle={{ height: 120 }}
			>
				<Picker.Item label="-- Seleccione --" value="" />
				<Picker.Item label="Dolar Estados Unidos " value="USD" />
				<Picker.Item label="Pesos Mexicano " value="MXN" />
				<Picker.Item label="Pesos Colombiano " value="COP" />
				<Picker.Item label="Euro " value="EUR" />
			</Picker>
			<Text style={styles.label}>Criptomoneda</Text>
			<Picker
				selectedValue={criptomoneda}
				onValueChange={(cripto) => obtenerCriptomoneda(cripto)}
				itemStyle={{ height: 120 }}
			>
				{criptomonedas.map((cripto) => (
					<Picker.Item
						key={cripto.CoinInfo.Id}
						label={cripto.CoinInfo.FullName}
						value={cripto.CoinInfo.Name}
					/>
				))}
			</Picker>
            <TouchableHighlight style={styles.btnCotizar} onPress={() => CotizarPrecio()}>
                <Text style={styles.textoCotizar}>Cotizar</Text>
            </TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	label: {
		fontFamily: 'Lato-Black',
		textTransform: 'uppercase',
		fontSize: 22,
		marginVertical: '2.5%'
    },
    btnCotizar:{
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 20
    },
    textoCotizar: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textAlign: 'center'
    }
});

export default Fomulario;
