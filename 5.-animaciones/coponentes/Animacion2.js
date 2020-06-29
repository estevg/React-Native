import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native'

const Animacion2 = () => {

    const [animacion] = useState( new Animated.Value(0) )

    useEffect(() => {
        Animated.timing( animacion, {
            toValue: 120, // El valor al que llega
            duration: 1000 // Cantidad de tiempo en llegar

        }).start(); // Iniciar la animacion
    }, [])

    return ( 
        <Animated.View
            style={[styles.caja, { width: animacion, height: animacion, margin: animacion}]}
        >
            
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
 
export default Animacion2;