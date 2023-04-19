import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Mylp(){
  return(
    <View style={estilo.container}>
    <ScrollView>
      <Text style={estilo.titulo}>My little pony </Text>
       <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/pony/mylttlepony.jpg')} />
      <Text style={estilo.texto}> Encantando não só as meninas, o programa atrai também adolescentes e até adultos. Nesta série, a pônei unicórnio Twilight Sparkle vai à cidade de Ponyville para aprimorar suas habilidades sociais. </Text>
      
      <View style={estilo.fundo}>
     <Text style={estilo.subtitulo}> Informações</Text>
       <Text style={estilo.infos}>
      <Ionicons name="md-heart" size={24} color="#BA90C6" style={ estilo.icon} />
        Elenco: Ashleigh Ball,Tabitha St. Germain,Tara Strong  </Text>


      <Text style={estilo.infos}>
        <Ionicons name="md-heart" size={24} color="#BA90C6" style={ estilo.icon} />
      Criador:Lauren Faust</Text>

      <Text style={estilo.infos}>
        <Ionicons name="md-heart"size={24} color="#BA90C6" style={ estilo.icon} />
       temporada(s) : 9</Text>

      <Text style={estilo.infos}>
        <Ionicons name="md-heart" size={24} color="#BA90C6" style={ estilo.icon} />
      Classificação etária:L</Text>

      

      </View>
       <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/pony/gifPony.gif')} />
        
    </ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF4F5'
  },
  texto: {
    fontSize: 20,
    textAlign: 'justify',
    margin: 20
  },
  titulo: {
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
    color: '#E8A0BF'
  },
  subtitulo: {
    fontSize: 25,
    color: '#BA90C6',
    textAlign:'center'
  },
  img:{
    width: largura,
    height:300,


  },
  
  fundo: {
    backgroundColor: '#C0DBEA',
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical: 20,
    textAlign: 'space-between'
  },
})