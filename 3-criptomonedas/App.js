import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, ScrollView, ActivityIndicator} from 'react-native';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import axios from 'axios'
import Cotizacion from './componentes/Cotizacion';

const App = () => {
  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState('');
  const [consultarApi, guardarConsultarApi] = useState(false)
  const [resultado, guardarResultado] = useState([])
  const [cargando, guardarCargando ] = useState(false)


  useEffect(() => {
      const cotizarCriptomoneda = async () => {
        if(consultarApi){
          // consultar la api para obtener la cotizacion 
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

          const resultado = await axios.get(url)
          guardarCargando(true)

          setTimeout(() => {
            guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])
            guardarConsultarApi(false)
            guardarCargando(false)
          }, 3000)
         
        }
      }
      cotizarCriptomoneda()
  }, [consultarApi])

  const componente = cargando ?  <ActivityIndicator size="large" color='#5e49e2' /> :   <Cotizacion resultado={resultado} />

  return (
    <>
    <ScrollView>
      <Header />
        <Image
          style={styles.imagen}
          source={require('./assets/img/cryptomonedas.png')}
        />
        <View style={styles.contenido}>
            <Formulario
              moneda={moneda}
              guardarMoneda={guardarMoneda}
              criptomoneda={criptomoneda}
              guardarCriptomoneda={guardarCriptomoneda}
              guardarConsultarApi={guardarConsultarApi}
            />  
        </View>
        <View style={{marginTop: 40}}>
            {componente}
        </View>
   
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginHorizontal: '2.5%'
  },
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
});

export default App;
