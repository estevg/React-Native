import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Animated } from 'react-native'

const Animacion5 = () => {

    const [ animacion ] = useState( new Animated.Value(0))

    const presionarBtn = () => {
        Animated.spring(animacion, {
            toValue: .9,

        }).start()
    }

    const soltarBtn = () => {
        Animated.spring(animacion, {
            toValue: 1,
            friction: 4, // mas bajo, mayor rebote ,
            tension: 60
        }).start()
    }

    const estiloanimacion = {
        transform: [{ scale: animacion }]
    }

    return ( 
        <View style={styles.contenedor}>
            <TouchableWithoutFeedback
                onPressIn={ () => presionarBtn()}
                onPressOut={ () => soltarBtn()}
            >
                <Animated.View style={[styles.btn, estiloanimacion]}>
                    <Text style={styles.texto}>Iniciar Session</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
     );
}

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: "center"
    },
    texto: {
        textTransform: 'uppercase',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
})
 
export default Animacion5;
