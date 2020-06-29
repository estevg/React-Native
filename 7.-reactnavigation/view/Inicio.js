import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

const Inicio = ({navigation}) => {

    const informacion = { 
        clienteId: 5000,
        TotalaPagar: 500
    }

    const vistarNosotros = () => {
        navigation.navigate('Nosotros', informacion)
    }
    console.log('Estamos en Inciooo')
    return ( 
        <View style={styles.Inicio}>
            <Text>Incio</Text>
            <Button 
                title='Ir a nosotros'
                onPress={() => vistarNosotros()}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    Inicio: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})
 
export default Inicio;