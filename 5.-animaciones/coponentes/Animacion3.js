import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native'

const Animacion3 = () => {

    const [animacion] = useState( new Animated.Value(14) )

    useEffect(() => {
        Animated.timing( animacion, {
            toValue: 45, // El valor al que llega
            duration: 500 // Cantidad de tiempo en llegar

        }).start(); // Iniciar la animacion
    }, [])

    return ( 
        <View>
            <Animated.Text style={[styles.texto, { fontSize: animacion }]}>Animacion 3</Animated.Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})
 
export default Animacion3;