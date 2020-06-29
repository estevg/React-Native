import React from 'react';
import { View, StyleSheet } from 'react-native'
import Animacion1 from './coponentes/Animacion1'
import Animacion2 from './coponentes/Animacion2'
import Animacion3 from './coponentes/Animacion3'
import Animacion4 from './coponentes/Animacion4'
import Animacion5 from './coponentes/Animacion5'
import Animacion6 from './coponentes/Animacion6'
import Animacion7 from './coponentes/Animacion7'







const App = () => {
  return (
    <>
        <View style={styles.animacion}>
          {/* <Animacion1 />
          <Animacion2 /> */}
          {/* <Animacion3 /> */}
          {/* <Animacion4 /> */}
          {/* <Animacion5 /> */}
          {/* <Animacion6 /> */}
          <Animacion7 />




        </View>
    </>
  );
};

const styles = StyleSheet.create({
  animacion: {
    marginTop: 100
  }
})

export default App;
