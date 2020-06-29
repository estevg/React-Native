import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'


const Nosotros = ({navigation, route}) => {
    console.log(navigation)
    console.log(route)
 
    const { clienteId } = route.params
    const volver = () => {
        navigation.navigate('Inicio')
        
        // Segunda forma
        // navigation.goBack()

        // Tercera forma 
        // Derecha a izquierda
        // navigation.push('Inicio')

    }

    return ( 
        <View style={styles.Nosotros}>
            <Text>Nosotros {clienteId}</Text>
            <Button 
                title='Volver'
                onPress={() => volver()}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    Nosotros: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})
 
export default Nosotros;