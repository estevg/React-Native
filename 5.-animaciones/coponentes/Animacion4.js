import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native'

const Animacion3 = () => {

    const [animacion] = useState( new Animated.Value(0) )

    useEffect(() => {
        Animated.timing( animacion, {
            toValue: 360, // El valor al que llega
            duration: 500 // Cantidad de tiempo en llegar

        }).start(); // Iniciar la animacion
    }, [])

    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })

    const estilo = {
        transform: [{ rotate: interpolacion }]
    }

    return ( 
        <View>
            <Animated.View style={[styles.caja, estilo]}></Animated.View> 
        </View>
    );
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})
 
export default Animacion3;